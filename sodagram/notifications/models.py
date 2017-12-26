from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from sodagram.users import models as user_models
from sodagram.images import models as image_models

# Create your models here.
class Notification(image_models.TimeStampedModel):

    TYPE_CHOICES = (
        ('like', 'Like'),
        ('follow', 'Follow'),
        ('comment', 'Comment')
    )
    
    creator = models.ForeignKey(user_models.User, related_name='creator')
    to = models.ForeignKey(user_models.User, related_name='to')
    notification_type = models.CharField(max_length=20, choices=TYPE_CHOICES) 
    image = models.ForeignKey(image_models.Image, null=True, blank=True) 
    comment = models.TextField(null=True, blank=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return 'From: {} - To: {}'.format(self.creator, self.to)