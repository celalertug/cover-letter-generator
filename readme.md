# Cover letter generator

Create your cover letter on Google docs. Download as html.  

Use template keyword for : 

Company name : {COMPANY_NAME}

Role Name : {POSITION_NAME}

[Example cover letter on google docs](https://docs.google.com/document/d/1DTghAorT0H_Iou87XUigRh0-s4kMKmP17Rc06iEBXnI/edit?usp=sharing).


### Requirements

- wkhtmltopdf

```
wget https://github.com/wkhtmltopdf/packaging/releases/download/0.12.6-1/wkhtmltox_0.12.6-1.focal_amd64.deb

sudo apt install ./wkhtmltox_0.12.6-1.focal_amd64.deb
```

## Usage 

```bash
generate-cover-letter.js $html_path $company_name $role_name
```

## Example Usage 

```bash
generate-cover-letter.js coverletter.html "Your Organization" "Software Developer"
```
