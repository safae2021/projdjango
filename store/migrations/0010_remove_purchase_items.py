# Generated by Django 4.2.1 on 2023-05-07 23:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0009_purchase_items'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='purchase',
            name='items',
        ),
    ]
