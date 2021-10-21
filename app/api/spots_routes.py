from flask import Blueprint, request
from flask_login import login_required
from app.models import Spot, db
from app.forms import SpotForm


spots_routes = Blueprint('spots', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@spots_routes.route('/')
def spots():
    spots = Spot.query.all()
    print('HERE', spots)
    return {"allSpots": [spot.to_dict() for spot in spots]}

@spots_routes.route('/', methods=['POST'])
@login_required
def create_spot():
    body = request.json
    form = SpotForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        spot = Spot(
        name=form.data['name'],
        price=form.data['price'],
        description=form.data['description'],
        spot_type=form.data['type'],
        num_bedrooms=form.data['num_bedrooms'],
        num_baths=form.data['num_baths'],
        num_beds=form.data['numBeds'],
        total_guests=form.data['total_guests'],
        city=form.data['city'],
        st_address=form.data['address'],
        longitude=form.data['longitude'],
        latitude=form.data['latitude'],
        user_id=body['userId']
        )
        db.session.add(spot),
        db.session.commit()
        return spot.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

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