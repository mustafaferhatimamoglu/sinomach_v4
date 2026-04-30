import fitz  # PyMuPDF
import sys
import os

def extract_largest_image(pdf_path, output_path):
    doc = fitz.open(pdf_path)
    largest_image = None
    max_area = 0
    image_data = None
    image_ext = None

    for i in range(len(doc)):
        page = doc[i]
        image_list = page.get_images()
        
        for image_index, img in enumerate(image_list, start=1):
            xref = img[0]
            base_image = doc.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext_curr = base_image["ext"]
            width = base_image["width"]
            height = base_image["height"]
            
            area = width * height
            if area > max_area:
                max_area = area
                image_data = image_bytes
                image_ext = image_ext_curr

    if image_data:
        # Save it
        final_out = f"{output_path}.{image_ext}"
        with open(final_out, "wb") as f:
            f.write(image_data)
        print(f"Saved {final_out}")
    else:
        print(f"No image found in {pdf_path}")

if __name__ == "__main__":
    pdfs = [
        ("public/brochures/CHANGLIN 906A Brochure.pdf", "public/images/models/906a-new"),
        ("public/brochures/SINOMACH ZG065S.pdf", "public/images/models/zg065s-new"),
        ("public/brochures/SINOMACH_ZG060S_欧五_英文.pdf", "public/images/models/zg060s-new"),
        ("public/brochures/SINOMACH ZG012S.pdf", "public/images/models/zg012s-new")
    ]
    for pdf, out in pdfs:
        if os.path.exists(pdf):
            extract_largest_image(pdf, out)
        else:
            print(f"Not found: {pdf}")
