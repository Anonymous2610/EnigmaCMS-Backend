# Generated by Django 3.2.5 on 2022-02-22 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0016_auto_20220222_2048'),
        ('events', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='domain_of_event',
            field=models.ManyToManyField(blank=True, related_name='Domain_of_Events', to='courses.Domain'),
        ),
    ]
