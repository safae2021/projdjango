# Generated by Django 4.1.1 on 2023-05-04 21:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0004_paymentform_shippingform'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='PaymentForm',
            new_name='Payment',
        ),
        migrations.RenameModel(
            old_name='ShippingForm',
            new_name='Shipping',
        ),
        migrations.DeleteModel(
            name='Order',
        ),
    ]
