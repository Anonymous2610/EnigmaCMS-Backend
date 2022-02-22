# Generated by Django 3.2.5 on 2022-02-21 10:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('courses', '0010_alter_article_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='home_page_display',
            field=models.CharField(blank=True, choices=[('Featured', 'Featured'), ('Exclusive', 'Exclusive')], max_length=20, null=True),
        ),
        migrations.AlterField(
            model_name='article',
            name='status',
            field=models.CharField(choices=[('Created', 'Created'), ('Rejected', 'Rejected'), ('Published', 'Published'), ('Draft', 'Draft')], default='Draft', max_length=20),
        ),
    ]
