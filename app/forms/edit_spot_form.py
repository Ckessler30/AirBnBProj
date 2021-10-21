from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, FloatField, SelectField, SubmitField
from wtforms.validators import DataRequired


class EditSpotForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    price = FloatField('price', validators=[DataRequired()])
    description = TextAreaField('description', validators=[DataRequired()])
    num_bedrooms = IntegerField('num_bedrooms', validators=[DataRequired()])
    num_beds = IntegerField('num_beds', validators=[DataRequired()])
    num_baths = IntegerField('num_baths', validators=[DataRequired()])
    total_guests = IntegerField('total_guests', validators=[DataRequired()])
    
    submit = SubmitField('Host Spot')

