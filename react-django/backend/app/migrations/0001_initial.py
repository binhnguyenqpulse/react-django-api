# Generated by Django 5.1.1 on 2024-09-30 07:13

import django.db.models.deletion
import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Activity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity_name', models.CharField(max_length=75)),
                ('planned_start_date', models.DateField()),
                ('planned_end_date', models.DateField()),
                ('actual_start_date', models.DateField(blank=True, null=True)),
                ('actual_end_date', models.DateField(blank=True, null=True)),
                ('activity_description', models.TextField()),
            ],
            options={
                'db_table': 'activity',
            },
        ),
        migrations.CreateModel(
            name='ClientPartner',
            fields=[
                ('client_name', models.CharField(max_length=45, primary_key=True, serialize=False)),
                ('address', models.CharField(max_length=75)),
                ('phone_no', models.CharField(max_length=15)),
                ('email', models.CharField(max_length=45)),
            ],
            options={
                'db_table': 'clientpartner',
            },
        ),
        migrations.CreateModel(
            name='Employee',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=45)),
                ('last_name', models.CharField(max_length=45)),
            ],
            options={
                'db_table': 'employee',
            },
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_name', models.CharField(max_length=75)),
                ('planned_start_date', models.DateField()),
                ('planned_end_date', models.DateField()),
                ('planned_budget', models.DecimalField(decimal_places=2, max_digits=12)),
                ('spent_budget', models.DecimalField(decimal_places=2, max_digits=12)),
                ('description', models.TextField()),
            ],
            options={
                'db_table': 'project',
            },
        ),
        migrations.CreateModel(
            name='ProjectManager',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'db_table': 'projectmanager',
            },
        ),
        migrations.CreateModel(
            name='React',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('employee', models.CharField(max_length=30)),
                ('department', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='Role',
            fields=[
                ('role_name', models.CharField(max_length=75, primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'role',
            },
        ),
        migrations.CreateModel(
            name='Team',
            fields=[
                ('team_name', models.CharField(max_length=75, primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'team',
            },
        ),
        migrations.CreateModel(
            name='UserAccount',
            fields=[
                ('username', models.CharField(max_length=45, primary_key=True, serialize=False)),
                ('password', models.CharField(max_length=45)),
                ('first_name', models.CharField(max_length=45)),
                ('last_name', models.CharField(max_length=45)),
                ('email', models.CharField(max_length=45)),
                ('project_manager', models.BooleanField(default=False)),
                ('login_time', models.DateTimeField(default=django.utils.timezone.now)),
            ],
            options={
                'db_table': 'useraccount',
            },
        ),
        migrations.CreateModel(
            name='Assigned',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.activity')),
                ('employee', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.employee')),
            ],
            options={
                'db_table': 'assigned',
            },
        ),
        migrations.CreateModel(
            name='PrecedingActivity',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('activity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subsequent_activities', to='app.activity')),
                ('preceding_activity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='preceding_activities', to='app.activity')),
            ],
            options={
                'db_table': 'precedingactivity',
            },
        ),
        migrations.AddField(
            model_name='activity',
            name='project',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.project'),
        ),
        migrations.AddField(
            model_name='project',
            name='project_manager',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.projectmanager'),
        ),
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('task_name', models.CharField(max_length=75)),
                ('planned_start_date', models.DateField()),
                ('planned_end_date', models.DateField()),
                ('actual_start_date', models.DateField(blank=True, null=True)),
                ('actual_end_date', models.DateField(blank=True, null=True)),
                ('task_description', models.TextField()),
                ('activity', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.activity')),
            ],
            options={
                'db_table': 'task',
            },
        ),
        migrations.CreateModel(
            name='PrecedingTask',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('preceding_task', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='preceding_tasks', to='app.task')),
                ('task', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subsequent_tasks', to='app.task')),
            ],
            options={
                'db_table': 'precedingtask',
            },
        ),
        migrations.CreateModel(
            name='TeamMember',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('employee_code', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.employee')),
                ('role_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.role')),
                ('team_name', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.team')),
            ],
            options={
                'db_table': 'team_member',
            },
        ),
        migrations.AddField(
            model_name='projectmanager',
            name='user_account',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.useraccount'),
        ),
        migrations.AddField(
            model_name='employee',
            name='user_account',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.useraccount'),
        ),
    ]
