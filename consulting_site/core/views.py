from django.shortcuts import render

# Create your views here.
def admin_dashboard(request):
    return render(request, 'dashboards/index.html')  # Adjust path if needed