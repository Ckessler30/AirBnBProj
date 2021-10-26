from app.models import db, SpotPic

def seed_spot_pics():
    pic1 = SpotPic(
        spot_id=1, img_url="https://photos.zillowstatic.com/fp/c95876a46b2cc6fe54eca802f3fac5dd-cc_ft_1536.webp"
    )
    pic2 = SpotPic(
        spot_id=1, img_url="https://photos.zillowstatic.com/fp/f31603994ea93414fee44a619fe83f7d-cc_ft_768.webp"
    )
    pic3 = SpotPic(
        spot_id=2, img_url="https://a0.muscache.com/im/pictures/miso/Hosting-52402771/original/8a0a3425-df04-474c-a97c-242cf2349078.jpeg?im_w=1200"
    )
    pic4 = SpotPic(
        spot_id=2, img_url="https://a0.muscache.com/im/pictures/miso/Hosting-52402771/original/ee257245-0ee2-4b39-b1f5-ee1434daeb99.jpeg?im_w=720"
    )
    pic5 = SpotPic(
        spot_id=2, img_url="https://a0.muscache.com/im/pictures/miso/Hosting-52402771/original/7f48c901-3685-47fb-9e7e-3ff6ac78f9c0.jpeg?im_w=720"
    )
    pic6 = SpotPic(
        spot_id=3, img_url="https://cdn.frequentislander.com/wp-content/uploads/2019/11/2ee527ae-87d5-4894-b4e4-8e3789057d3f.f6.jpg"
    )
    pic7 = SpotPic(
        spot_id=4, img_url="https://mediavault.point2.com/p2h/listing/32dc/223e/bf2a/322ab036df2ab61ba029/nwm_large.jpg"
    )
    pic8 = SpotPic(
        spot_id=5, img_url="https://a0.muscache.com/im/pictures/0f1b8e61-53b9-4224-9b30-b63b8fd6a182.jpg?im_w=1200"
    )
    pic9 = SpotPic(
        spot_id=5, img_url="https://a0.muscache.com/im/pictures/miso/Hosting-13446257/original/e8d70444-df18-44ae-b0df-93149249928b.jpeg?im_w=720"
    )
    pic10 = SpotPic(
        spot_id=5, img_url="https://a0.muscache.com/im/pictures/9438dde1-397b-44c7-a8c7-564f0e3fa2cb.jpg?im_w=1200"
    )
    pic11 = SpotPic(
        spot_id=6, img_url="https://static.wikia.nocookie.net/starwars/images/3/3d/Jabbas_Palace.jpg/revision/latest?cb=20071211223828"
    )
    pic12 = SpotPic(
        spot_id=7, img_url="https://static.wikia.nocookie.net/starwars/images/9/96/Uprising_on_Endor.png/revision/latest?cb=20200315163407"
    )
    pic13 = SpotPic(
        spot_id=8, img_url="https://a0.muscache.com/im/pictures/449ffe97-dd5c-4d4b-b2f6-1dffd9d1faf6.jpg?im_w=720"
    )
    pic14 = SpotPic(
        spot_id=8, img_url="https://a0.muscache.com/im/pictures/96468e2a-864e-437e-a954-01a3f63352e8.jpg?im_w=1200"
    )


    db.session.add(pic1)
    db.session.add(pic2)
    db.session.add(pic3)
    db.session.add(pic4)
    db.session.add(pic5)
    db.session.add(pic6)
    db.session.add(pic7)
    db.session.add(pic8)
    db.session.add(pic9)
    db.session.add(pic10)
    db.session.add(pic11)
    db.session.add(pic12)
    db.session.add(pic13)
    db.session.add(pic14)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_spot_pics():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
