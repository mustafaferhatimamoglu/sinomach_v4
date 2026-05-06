import os
import zipfile

def zip_dir(path, zip_handle):
    for root, dirs, files in os.walk(path):
        for file in files:
            file_path = os.path.join(root, file)
            # Create a relative path for the file in the zip
            rel_path = os.path.relpath(file_path, path)
            zip_handle.write(file_path, rel_path)

dist_path = r'c:\Users\TOKGOZ\Downloads\sinomach_v3-main\sinomach_v3-main\app\dist'
zip_path = r'c:\Users\TOKGOZ\Downloads\sinomach_v3-main\sinomach_v3-main\sinomach_production_final.zip'

with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
    zip_dir(dist_path, zipf)

print(f"Successfully zipped {dist_path} to {zip_path}")
