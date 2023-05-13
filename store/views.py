from django.shortcuts import render 
from .forms import ContactForm , PurchaseForm, SubscribeForm
from django.shortcuts import render, redirect
from store.models import Subscribe


def home(request):
    context={}
    if request.method == 'POST':
        email = request.POST.get('email')
        # Create a new Subscriber instance and save it to the database
        subscriber = Subscribe(email=email)
        subscriber.save()
        # Redirect the user to a thank you page or back to the original page
    return render(request,'store/home.html', context)


def store(request):
    context={}
    if request.method == 'POST':
        email = request.POST.get('email')
        # Create a new Subscriber instance and save it to the database
        subscriber = Subscribe(email=email)
        subscriber.save()
        # Redirect the user to a thank you page or back to the original page
    return render(request,'store/store.html',context)



def customercare(request):
    context = {}
    if request.method == "POST":
        if 'contact_form' in request.POST:
            form = ContactForm(request.POST)
            if form.is_valid():
                form.save()
                return render(request, 'store/customercare.html', context)
        elif 'subscribe_form' in request.POST:
            form = SubscribeForm(request.POST)
            if form.is_valid():
                email = request.POST.get('email')
                # Create a new Subscriber instance and save it to the database
                subscriber = Subscribe(email=email)
                subscriber.save()
                # Redirect the user to a thank you page or back to the original page
                return render(request, 'store/shoppingbag.html')
    else:
        form = ContactForm()
    context['form'] = form
    return render(request, 'store/customercare.html', context)




def contacts(request):
    context={}
    if request.method == 'POST':
        email = request.POST.get('email')
        # Create a new Subscriber instance and save it to the database
        subscriber = Subscribe(email=email)
        subscriber.save()
    return render(request,'store/contacts.html',context)



def shoppingbag(request):
    context = {}
    if request.method == "POST":
        if 'checkout_submit' in request.POST:
            # Handle the purchase form submission
            form = PurchaseForm(request.POST)
            if form.is_valid():
                form.save()
                return render(request, 'store/shoppingbag.html')
        elif 'subscribe_form' in request.POST:
            # Handle the subscribe form submission
            form = SubscribeForm(request.POST)
            if form.is_valid():
                email = form.cleaned_data['email']
                # Create a new Subscriber instance and save it to the database
                subscriber = Subscribe(email=email)
                subscriber.save()
                # Redirect the user to a thank you page or back to the original page
                return render(request, 'store/shoppingbag.html')
    else:
        purchase_form = PurchaseForm()
        subscribe_form = SubscribeForm()
        context['checkout_submit'] = purchase_form
        context['subscribe_form'] = subscribe_form
    return render(request, 'store/shoppingbag.html', context)




def favorites(request):
    context={}
    return render(request, 'store/favorites.html', context)


    
