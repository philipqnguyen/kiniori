# Kiniori
Organizing your web, one bookmark at a time.

## Removed Autopublish and Insecure
Already removed the Autopublish and Insecure page from the default meteor app.

The Autopublish package will automatically publish all mongo collections to the
client side. It's great for fast prototyping, but it is not safe. so the Autopublish package has been removed with `meteor remove autopublish`.

The Insecure package allows you to make changes to the mongo collection right
from the developer's console. While it's great for quickly testing and
prototyping an idea, it is not secure. This, the Insecure package has been
removed with `meteor remove insecure`.

## Resources
Quick refreshers: http://practical.meteor.com/
