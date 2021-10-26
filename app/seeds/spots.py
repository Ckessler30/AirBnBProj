from app.models import db, Spot

def seed_spots():
    spot1 = Spot(
        name='Cool Hideout', price=100, description='A cool hideout in the woods', spot_type="Cabin", num_bedrooms=2, num_baths=2, num_beds=3, total_guests=4, city="Virginia", st_address="45 Old Pond Trl, Fancy Gap, VA 24328", longitude=-80.668830, latitude=36.643890, user_id=1
    )
    spot7 = Spot(
        name='Cozy/Romantic Cottage - 10 mins from Shenandoah NP', price=143, description="Welcome to the South River Falls Cottage. Cozy up for a romantic getaway with a year-round operated hot tub, gas fireplace, & three-headed shower, or bring the whole family and bond under the stars. Cook meals inside, out on the grill, or head into town. Located 10 minutes Shenandoah National Park’s Swift Run Gap Entrance, you can be out hiking a trail in no time. Enjoy all the valley has to offer from this central location; drive to Luray Caverns, Shenandoah River, Massanutten Ski Resort, etc.", spot_type="Cabin", num_bedrooms=1, num_baths=1, num_beds=2, total_guests=4, city="Virginia", st_address="45 Old Pond Trl, Elkton, VA 22827", longitude=-78.4535, latitude=38.4755, user_id=1
    )
    spot2 = Spot(
        name='Cool Get away', price=150, description='A cool place to get away', spot_type="Beach House", num_bedrooms=4, num_baths=5, num_beds=6, total_guests=10, city="North Carolina", st_address="1106 Harbour View Dr, Collington, NC 27948", longitude=-75.724440, latitude=36.006870, user_id=2
    )
    spot3 = Spot(
        name='Cool Mansion', price=300, description='A cool mansion', spot_type="Villa", num_bedrooms=5, num_baths=5, num_beds=10, total_guests=10, city="Florida", st_address="311 Ellamar Rd, West Palm Beach, FL 33405", longitude=-80.052240, latitude=26.662770, user_id=3
    )
    spot8 = Spot(
        name='Requited Bliss - luxury vacation destination', price=995, description='Enjoy a stay at Requited Bliss! Your own private oasis to relax amidst copious amounts of tropical foliage, salt water heated pool, hot tub, completely equipped home, walking distance to the Intracoastal waterway, and a few minutes drive to the ocean.', spot_type="Villa", num_bedrooms=4, num_baths=5, num_beds=4, total_guests=8, city="Florida", st_address="711 Test Rd, West Palm Beach, FL 33405", longitude=-80.052240, latitude=26.662770, user_id=7
    )
    spot4 = Spot(
        name="JABBA THE HUTT'S PALACE", price=300, description='A single, winding dirt-swept road curves up into the crook of a rocky canyon, leading to a lone structure in the desert wastes beyond the Dune Sea of Tatooine. Here stood the palace of Jabba the Hutt, an immense curving building of sandblasted metal and pitted stone. Inside, the dregs of the galaxy congregated to do all manner of illicit business, to curry favor with the grotesque crime lord, or to avoid his fickle wrath. Jabba reclined atop a stone dais within the throne room of his palace, a bustling chamber that overlooked a secret pit that contained his favorite beast, the vicious rancor monster.', spot_type="Villa", num_bedrooms=20, num_baths=18, num_beds=15, total_guests=100, city="Nevada", st_address="311 Hutt Rd, Las Vegas, NV 88901", longitude=-115.139832, latitude=36.169941, user_id=5
    )
    spot5 = Spot(
        name='Ewoks Village', price=100, description='Secluded in a remote corner of the galaxy, the forest moon of Endor would easily have been overlooked by history were it not for the decisive battle that occurred there. The lush, forest home of the Ewok species is the gravesite of Darth Vader and the Empire itself. It was here that the Rebel Alliance won its most crucial victory over the Galactic Empire.', spot_type="Tree House", num_bedrooms=8, num_baths=2, num_beds=30, total_guests=50, city="Wyoming", st_address="211 Endor Terr, Park County, WY 82190", longitude=- 110.5885, latitude=44.4280, user_id=3
    )
    spot6 = Spot(
        name='1696 Surf Song * 2 Min Walk to Beach * Community Tennis', price=89, description="​​​​​​​Charming Oceanside Cottage Unwind in this charming coastal cottage by the sea with expansive views of the Atlantic shoreline. Beautifully decorated and well-equipped with everything your family needs for an extended OBX visit, Surf Song is the perfect home away from home! Sitting just 150-ft.", spot_type="Beach House", num_bedrooms=4, num_baths=3, num_beds=4, total_guests=10, city="North Carolina", st_address="1696 Surf Song Rd, Corolla, NC 27927", longitude=-75.831223, latitude=36.381329, user_id=6
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

