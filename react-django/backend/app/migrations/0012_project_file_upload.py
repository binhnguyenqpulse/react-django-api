# Generated by Django 4.2.16 on 2024-10-21 03:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0011_delete_projectmanager"),
    ]

    operations = [
        migrations.AddField(
            model_name="project",
            name="file_upload",
            field=models.FileField(blank=True, null=True, upload_to="uploads/"),
        ),
    ]
