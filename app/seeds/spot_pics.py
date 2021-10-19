from app.models import db, SpotPic

def seed_spot_pics():
    pic1 = SpotPic(
        spot_id=1, img_url="https://photos.zillowstatic.com/fp/c95876a46b2cc6fe54eca802f3fac5dd-cc_ft_1536.webp"
    )
    pic2 = SpotPic(
        spot_id=1, img_url="https://photos.zillowstatic.com/fp/f31603994ea93414fee44a619fe83f7d-cc_ft_768.webp"
    )
    pic3 = SpotPic(
        spot_id=2, img_url="https://photos.zillowstatic.com/fp/e1276ebf3b677be76e9e3b6161f4e5da-cc_ft_1536.webp"
    )
    pic4 = SpotPic(
        spot_id=3, img_url="https://photos.zillowstatic.com/fp/639cd94964f34f899ed64b4d884b004f-cc_ft_1536.webp"
    )

    db.session.add(pic1)
    db.session.add(pic2)
    db.session.add(pic3)
    db.session.add(pic4)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_spot_pics():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
