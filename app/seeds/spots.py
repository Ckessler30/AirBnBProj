from app.models import db, Spot

def seed_spots():
    spot1 = Spot(
        name='Cool Hideout', price=100, description='A cool hideout in the woods', spot_type="Cabin", num_bedrooms=2, num_baths=2, num_beds=3, total_guests=4, city="Virginia", st_address="45 Old Pond Trl, Fancy Gap, VA 24328", longitude=-80.668830, latitude=36.643890, user_id=1
    )
    spot2 = Spot(
        name='Cool Get away', price=150, description='A cool place to get away', spot_type="House", num_bedrooms=4, num_baths=5, num_beds=6, total_guests=10, city="North Carolina", st_address="1106 Harbour View Dr, Collington, NC 27948", longitude=-75.724440, latitude=36.006870, user_id=2
    )
    spot3 = Spot(
        name='Cool Mansion', price=300, description='A cool mansion', spot_type="Villa", num_bedrooms=5, num_baths=5, num_beds=10, total_guests=10, city="Florida", st_address="311 Ellamar Rd, West Palm Beach, FL 33405", longitude=-80.052240, latitude=26.662770, user_id=3
    )
   
    db.session.add(spot1)
    db.session.add(spot2)
    db.session.add(spot3)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_spots():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()

