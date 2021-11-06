# Generated by Django 3.2.5 on 2021-11-06 17:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0008_auto_20211106_2252'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='status',
            field=models.CharField(choices=[('Created', 'Created'), ('Published', 'Published'), ('Draft', 'Draft'), ('Rejected', 'Rejected')], default='Draft', max_length=20),
        ),
    ]
