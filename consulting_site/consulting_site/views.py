# consulting_site/consulting_site/views.py

from django.shortcuts import render

def home(request):
    return render(request, 'consulting_site/home.html')

def contact(request):
    if request.method == 'POST':
        # Handle form submission logic here (e.g., send email, save data)
        pass
    return render(request, 'consulting_site/contact.html')  # Update with your template path