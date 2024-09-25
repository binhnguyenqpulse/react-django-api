from django.db import models

# Create your models here.
class React (models.Model):
    employee = models.CharField (max_length = 30)
    department = models.CharField (max_length = 200)
    
from django.db import models
from django.utils import timezone

class UserAccount(models.Model):
    username = models.CharField(max_length=45, primary_key=True)
    password = models.CharField(max_length=45)
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    email = models.CharField(max_length=45)
    project_manager = models.BooleanField(default=False)
    login_time = models.DateTimeField(default=timezone.now)

class Employee(models.Model):
    first_name = models.CharField(max_length=45)
    last_name = models.CharField(max_length=45)
    user_account = models.ForeignKey(UserAccount, on_delete=models.CASCADE)

class Team(models.Model):
    team_name = models.CharField(max_length=75, primary_key=True)

class Role(models.Model):
    role_name = models.CharField(max_length=75, primary_key=True)

class TeamMember(models.Model):
    team_name = models.ForeignKey(Team, on_delete=models.CASCADE)
    employee_code = models.ForeignKey(Employee, on_delete=models.CASCADE)
    role_name = models.ForeignKey(Role, on_delete=models.CASCADE)

    class Meta:
        unique_together = [['team_name', 'employee_code']]

class ProjectManager(models.Model):
    user_account = models.ForeignKey(UserAccount, on_delete=models.CASCADE)

class Project(models.Model):
    project_name = models.CharField(max_length=75)
    planned_start_date = models.DateField()
    planned_end_date = models.DateField()
    planned_budget = models.DecimalField(max_digits=12, decimal_places=2)
    spent_budget = models.DecimalField(max_digits=12, decimal_places=2)
    description = models.TextField()
    project_manager = models.ForeignKey(ProjectManager, on_delete=models.CASCADE)

class ClientPartner(models.Model):
    client_name = models.CharField(max_length=45, primary_key=True)
    address = models.CharField(max_length=75)
    phone_no = models.CharField(max_length=15)
    email = models.CharField(max_length=45)

class Activity(models.Model):
    activity_name = models.CharField(max_length=75)
    planned_start_date = models.DateField()
    planned_end_date = models.DateField()
    actual_start_date = models.DateField(null=True, blank=True)
    actual_end_date = models.DateField(null=True, blank=True)
    activity_description = models.TextField()
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

class Task(models.Model):
    task_name = models.CharField(max_length=75)
    planned_start_date = models.DateField()
    planned_end_date = models.DateField()
    actual_start_date = models.DateField(null=True, blank=True)
    actual_end_date = models.DateField(null=True, blank=True)
    task_description = models.TextField()
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)

class Assigned(models.Model):
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    activity = models.ForeignKey(Activity, on_delete=models.CASCADE)

    class Meta:
        unique_together = [['employee', 'activity']]

class PrecedingActivity(models.Model):
    preceding_activity = models.ForeignKey(Activity, related_name='preceding_activities', on_delete=models.CASCADE)
    activity = models.ForeignKey(Activity, related_name='subsequent_activities', on_delete=models.CASCADE)

    class Meta:
        unique_together = [['preceding_activity', 'activity']]

class PrecedingTask(models.Model):
    preceding_task = models.ForeignKey(Task, related_name='preceding_tasks', on_delete=models.CASCADE)
    task = models.ForeignKey(Task, related_name='subsequent_tasks', on_delete=models.CASCADE)

    class Meta:
        unique_together = [['preceding_task', 'task']]