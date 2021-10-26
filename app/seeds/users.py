from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        name='Mando', email='demo@aa.io', bio="The Mandalorian, known to a few as Din Djarin, is a battle-worn bounty hunter, making his way through a dangerous galaxy in an uncertain age.", profile_pic="https://lumiere-a.akamaihd.net/v1/images/the-mandalorian-main_3878a50e.jpeg?region=144%2C1%2C952%2C536", is_superhost=True,  password='password')
    han = User(
        name='Han Solo', email='han@aa.io', bio="Hi, I am Han...Han Solo rose from an impoverished childhood on the mean streets of Corellia to become one of the heroes of the Rebel Alliance. As captain of the Millennium Falcon, Han and his co-pilot Chewbacca came to believe in the cause of galactic freedom, joining Luke Skywalker and Princess Leia Organa in the fight against the Empire. After the Battle of Endor, Han faced difficult times in a chaotic galaxy, leading to a shattering confrontation with his estranged son Ben.", profile_pic="https://lumiere-a.akamaihd.net/v1/images/han-solo-main_a4c8ff79.jpeg?region=0%2C0%2C1920%2C1080&width=960", is_superhost=False, password='password')
    wicket = User(
        name='Wicket', email='wicket@aa.io', bio="Hi, I am Wicket...Wicket W. Warrick was the brave young Ewok who willingly joined the Rebellion and aided in the battle against the Empire on the forest moon of Endor. Even before he encountered the Rebels, Wicket had devised methods for defeating the Imperial machines, plans which were implemented after the Ewok befriended Princess Leia and recruited his tribe to the Alliance's cause. During the Battle of Endor, Wicket fought valiantly alongside his new allies.", profile_pic="https://lumiere-a.akamaihd.net/v1/images/databank_wickettwwarrick_01_169_86d1210c.jpeg?region=0%2C3%2C1560%2C780&width=960",  password='password')
    jimmy = User(
        name='Jimmy', email='jimmy@aa.io', bio="Hi, I am Jimmy. Welcome to my Bearbnb profile, please take a look at my listings!", profile_pic="https://static.wikia.nocookie.net/heroes-and-villain/images/a/a0/Jimmy_Neutron.jpg/revision/latest/top-crop/width/360/height/450?cb=20200630020632",  password='password')
    boba = User(
        name='Boba Fett', email='boba@aa.io', bio="Hi, I am Boba... With his customized Mandalorian armor, deadly weaponry, and silent demeanor, Boba Fett was one of the most feared bounty hunters in the galaxy. A genetic clone of his “father,” bounty hunter Jango Fett, Boba learned combat and martial skills from a young age. Over the course of his career, which included contracts for the Empire and the criminal underworld, he became a legend.", profile_pic="https://lumiere-a.akamaihd.net/v1/images/boba-fett-main_75a5545c.jpeg?region=0%2C0%2C951%2C536",  password='password')
    grogu = User(
        name='Grogu', email='grogu@aa.io', bio="Hi, I am Grogu...A mysterious alien pursued by bounty hunters on behalf of Imperial interests.", profile_pic="https://lumiere-a.akamaihd.net/v1/images/the-child-2_f543b569.jpeg?region=0%2C0%2C1280%2C720&width=960",  password='password')
    chewy = User(
        name='Chewbacca', email='chewy@aa.io', bio="Hi, I am Chewbacca...A legendary Wookiee warrior and Han Solo’s longtime co-pilot, Chewbacca continues to serve as faithful first mate to carry out daring missions against the First Order behind the controls of the Millennium Falcon. Known as Chewie to his closest friends, he was part of a core group of rebels who restored freedom to the galaxy during the reign of the Galactic Empire. Known for his short temper and accuracy with a bowcaster, Chewie also has a big heart and unwavering loyalty to his friends.", profile_pic="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F958761228%2F0x0.jpg%3Ffit%3Dscale",  password='password')

    db.session.add(demo)
    db.session.add(han)
    db.session.add(wicket)
    db.session.add(jimmy)
    db.session.add(boba)
    db.session.add(grogu)
    db.session.add(chewy)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
