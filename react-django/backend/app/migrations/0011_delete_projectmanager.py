# Generated by Django 4.2.16 on 2024-10-15 01:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0010_alter_projectmanager_user_account"),
    ]

    operations = [
        migrations.DeleteModel(
            name="ProjectManager",
        ),
    ]
