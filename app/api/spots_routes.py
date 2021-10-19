from flask import Blueprint
from app.models import Spot

spot_routes = Blueprint('spots', __name__)

@spot_routes.route('/')
def spots():
    spots = Spot.query.all()
    return {'allSpots': [spot.to_dict() for spot in spots]}