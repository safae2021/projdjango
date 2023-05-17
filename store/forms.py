from django import forms
from store.models import Contact
from store.models import Purchase
from store.models import Subscribe





class ContactForm(forms.ModelForm):
    class Meta : 
        model = Contact
        fields = ['Fname' , 'Lname' , 'email' , 'mess']



class PurchaseForm(forms.ModelForm):
    class Meta:
        model = Purchase
        fields = ('email', 'name', 'address', 'city', 'zip_code','card_number', 'card_name', 'card_expiration', 'card_security')
        

class SubscribeForm(forms.ModelForm):
    class Meta:
        model= Subscribe
        fields = ['email']
