# Static HTTP server for ChikitsaConnect supporting "chikitsaconnect" URL path
$port = 8080
$path = "C:\Users\kanis\.gemini\antigravity\scratch\ChikitsaConnect"

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://127.0.0.1:$port/")

try {
    $listener.Start()
    Write-Host "ChikitsaConnect server running at:"
    Write-Host " -> http://localhost:$port/chikitsaconnect"
    Write-Host " -> http://127.0.0.1:$port/chikitsaconnect"
} catch {
    Write-Error "Failed to start listener: $_"
    exit 1
}

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response
        
        $localPath = $request.Url.LocalPath
        
        # Route both root and /chikitsaconnect paths
        if ($localPath -eq "/" -or [string]::IsNullOrWhiteSpace($localPath) -or $localPath -eq "/chikitsaconnect" -or $localPath -eq "/chikitsaconnect/") {
            $localPath = "/index.html"
        } elseif ($localPath.StartsWith("/chikitsaconnect/")) {
            $localPath = $localPath.Substring(16) # strip /chikitsaconnect
        }
        
        $filePath = Join-Path $path ($localPath.TrimStart('/').Replace('/', '\'))
        
        if (Test-Path $filePath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $contentType = switch ($ext) {
                ".html" { "text/html; charset=utf-8" }
                ".css"  { "text/css; charset=utf-8" }
                ".js"   { "application/javascript; charset=utf-8" }
                ".json" { "application/json; charset=utf-8" }
                ".png"  { "image/png" }
                ".jpg"  { "image/jpeg" }
                ".svg"  { "image/svg+xml" }
                default { "application/octet-stream" }
            }
            $response.ContentType = $contentType
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $err = [System.Text.Encoding]::UTF8.GetBytes("404 - File Not Found: $localPath")
            $response.OutputStream.Write($err, 0, $err.Length)
        }
        $response.Close()
    } catch {
        # ignore or handle client disconnects
    }
}
