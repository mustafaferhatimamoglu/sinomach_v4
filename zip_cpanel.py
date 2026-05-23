import os
import zipfile

def zip_dir(path, zip_handle):
    for root, dirs, files in os.walk(path):
        for file in files:
            file_path = os.path.join(root, file)
            # Create a relative path for the file in the zip
            rel_path = os.path.relpath(file_path, path)
            # Replace backslashes with forward slashes for Linux compatibility
            rel_path = rel_path.replace(os.sep, '/')
            zip_handle.write(file_path, rel_path)

dist_path = r'c:\Users\mfi\sinomach_v4\app\dist'
zip_path = r'c:\Users\mfi\sinomach_v4\sinomach_cpanel.zip'

print(f"Starting zip process...")
print(f"Source directory: {dist_path}")
print(f"Destination file: {zip_path}")

if not os.path.exists(dist_path):
    print(f"ERROR: {dist_path} does not exist!")
    exit(1)

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    zip_dir(dist_path, zipf)

print(f"Successfully zipped {dist_path} to {zip_path}")
