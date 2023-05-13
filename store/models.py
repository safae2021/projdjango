from django.db import models

# Create your models here.
class Contact(models.Model):
    Fname = models.CharField(max_length=50)
    Lname = models.CharField(max_length=50)
    email = models.EmailField(max_length=200)
    mess = models.CharField(max_length=200)

    def __str__(self):
        return self.Fname + ' ' + self.Lname
    


class Purchase(models.Model):
    email = models.EmailField()
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    zip_code = models.CharField(max_length=10)
    card_number = models.CharField(max_length=16)
    card_name = models.CharField(max_length=255)
    card_expiration = models.CharField(max_length=10)
    card_security = models.CharField(max_length=4)
    
    

    def __str__(self):
        return self.name



class Subscribe(models.Model):
    email= models.EmailField()


    





