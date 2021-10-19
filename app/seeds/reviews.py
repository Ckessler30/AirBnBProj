from app.models import db, Review

def seed_reviews():
    rev1 = Review(
        user_id=2, spot_id=1, clean_rating=5, accur_rating=4, comm_rating=4, location_rating=5, check_in_rating=4, value_rating=4, review_text='This place was an absolute blast to stay at, would highly recommend'
    )
    rev2 = Review(
        user_id=1, spot_id=2, clean_rating=5, accur_rating=5, comm_rating=5, location_rating=5, check_in_rating=4, value_rating=5, review_text='The outer banks is the best place ever to stay at, I would rent this house again and again'
    )
    rev3 = Review(
        user_id=3, spot_id=1, clean_rating=5, accur_rating=4, comm_rating=4, location_rating=5, check_in_rating=4, value_rating=4, review_text='I have to go back, I love this cabin'
    )
    rev4 = Review(
        user_id=1, spot_id=3, clean_rating=5, accur_rating=4, comm_rating=4, location_rating=5, check_in_rating=4, value_rating=4, review_text='Love staying here with my friends, the place is huge'
    )

    db.session.add(rev1)
    db.session.add(rev2)
    db.session.add(rev3)
    db.session.add(rev4)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()