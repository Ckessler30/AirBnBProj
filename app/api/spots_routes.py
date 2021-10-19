from flask import Blueprint, request
from flask_login import login_required
from app.models import Spot, db


spots_routes = Blueprint('spots', __name__)

@spots_routes.route('/')
def spots():
    spots = Spot.query.all()
    print('HERE', spots)
    return {"allSpots": [spot.to_dict() for spot in spots]}

@spots_routes.route('/', methods=['POST'])
@login_required
def create_spot():
    body = request.json
    new_spot = Spot(
        name=body['name'],
        price=body['price'],
        description=body['description'],
        spot_type=body['type'],
        num_bedrooms=body['numBedrooms'],
        num_baths=body['numBaths'],
        num_beds=body['numBeds'],
        total_guests=body['totalGuests'],
        city=body['city'],
        st_address=body['address'],
        longitude=body['long'],
        latitude=body['lat'],
        user_id=body['userId']
    )
    db.session.add(new_spot),
    db.session.commit()
    return new_spot.to_dict()

@spots_routes.route('/<int:id>', methods=["GET", "PATCH", "DELETE"])
def update_delete_spot(id):
    if request.method == "GET":
        current_spot = Spot.query.get(id)
        return current_spot.to_dict()
    if request.method == "PATCH":
        body = request.json
        current_spot = Spot.query.get(id)
        current_spot.description = body['description']
        current_spot.name = body['name']
        current_spot.num_baths = body['numBaths']
        current_spot.num_bedrooms = body['numBedrooms']
        current_spot.num_beds = body['numBeds']
        current_spot.price = body['price']
        current_spot.total_guests = body['totalGuests']

        db.session.commit()
        return current_spot.to_dict()
    if request.method == "DELETE":
        current_spot = Spot.query.get(id)
        db.session.delete(current_spot)
        db.session.commit()
        return 'ok'