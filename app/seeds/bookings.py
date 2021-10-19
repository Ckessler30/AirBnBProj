from app.models import db, Booking

def seed_bookings():
    book1 = Booking(
        spot_id=1, user_id=1, start_date="2021-10-23", end_date="2021-10-30", num_guests=3
    )
    book2 = Booking(
        spot_id=2, user_id=2, start_date="2021-11-1", end_date="2021-11-9", num_guests=5
    )
    book3 = Booking(
        spot_id=3, user_id=1, start_date="2021-12-5", end_date="2021-12-25", num_guests=8
    )
    book4 = Booking(
        spot_id=1, user_id=2, start_date="2021-12-5", end_date="2021-12-15", num_guests=8
    )

    db.session.add(book1)
    db.session.add(book2)
    db.session.add(book3)
    db.session.add(book4)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_bookings():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
