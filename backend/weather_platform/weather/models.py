from django.db import models

class Weather(models.Model):
    city = models.CharField(max_length = 200)
    description = models.CharField(max_length = 500, null=False)
    humidity = models.IntegerField(default=0)

    def __str__(self):
        return self.city


