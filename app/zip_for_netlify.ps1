Add-Type -AssemblyName System.IO.Compression.FileSystem
$sourcePath = "c:\Users\TOKGOZ\Downloads\sinomach-main\sinomach-main\app\dist"
$destPath = "c:\Users\TOKGOZ\Downloads\sinomach-main\sinomach-main\sinomach_final_v8.zip"

if (Test-Path $destPath) { Remove-Item $destPath }

$zip = [System.IO.Compression.ZipFile]::Open($destPath, 'Create')
$files = Get-ChildItem -Path $sourcePath -Recurse | Where-Object { ! $_.PSIsContainer }

foreach ($file in $files) {
    # Calculate the entry name (path inside zip)
    $relativePath = $file.FullName.Substring($sourcePath.Length + 1)
    # FORCE FORWARD SLASHES for Linux/Netlify compatibility
    $normalizedPath = $relativePath.Replace("\", "/")
    
    [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile($zip, $file.FullName, $normalizedPath)
}
$zip.Dispose()
write-host "ZIP creation complete: $destPath"
