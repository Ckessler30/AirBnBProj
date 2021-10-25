from typing import Text
from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, IntegerField, FloatField, SelectField, SubmitField
from wtforms.validators import DataRequired


class SpotForm(FlaskForm):
    name = StringField('Name', validators=[DataRequired()])
    price = FloatField('Price', validators=[DataRequired()])
    description = TextAreaField('Description', validators=[DataRequired()])
    type = SelectField('Type', choices=["Condo", "Cabin", "House", "Villa", "Tree House", "Beach House", "Camp Site"], validators=[DataRequired()])
    num_bedrooms = IntegerField('Number of bedrooms', validators=[DataRequired()])
    num_beds = IntegerField('Number of beds', validators=[DataRequired()])
    num_baths = IntegerField('number of baths', validators=[DataRequired()])
    total_guests = IntegerField('Total guests', validators=[DataRequired()])
    city = StringField('Sity', validators=[DataRequired()])
    st_address = StringField('Address', validators=[DataRequired()])
    longitude = FloatField('Longitude', validators=[DataRequired()])
    latitude = FloatField('Latitude', validators=[DataRequired()])
    
    submit = SubmitField('Host Spot')

