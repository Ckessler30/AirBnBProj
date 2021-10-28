from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


# def username_exists(form, field):
#     # Checking if username is already in use
#     username = field.data
#     user = User.query.filter(User.username == username).first()
#     if user:
#         raise ValidationError('Username is already in use.')

def username_length(form, field):
    name = field.data
    print("-----------", name)
    if len(name) > 100:
        raise ValidationError("Name must be less than 100 characters.")
    


class SignUpForm(FlaskForm):
    name = StringField(
        'name', validators=[DataRequired(), Length(-1, 100, "Name must be less than 100 characters.")])
    email = StringField('email', validators=[DataRequired(), user_exists, Email("Please enter a valid email.")])
    password = StringField('password', validators=[DataRequired()])
    bio = TextAreaField('bio', validators=[DataRequired()])
    profile_pic = StringField('profile_pic', validators=[DataRequired()])
    
