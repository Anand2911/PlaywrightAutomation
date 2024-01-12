class Searchpage{
    constructor(page){
        this.page = page;
        this.location= page.locator('//select[@id="location"]').selectOption('Sydney');
        this.hotels = page.locator('//select[@id="hotels"]').selectOption({index:1});
        this.room_type = page.locator('//select[@id="room_type"]').selectOption({label:'Standard'});
        this.room_nos = page.locator('//select[@id="room_nos"]').selectOption('2');
        this.adult_room = page.locator('//select[@id="adult_room"]').selectOption('2');
        this.Submit = page.locator('//input[@id="Submit"]').click;
    }
    async searchHotel(locationName,hotelsName,room_typeName,room_nosName){
        await this.location.selectOption(locationName);
        await this.hotels.selectOption(hotelsName);
        await this.room_type.selectOption(room_typeName);
        await this.room_nos.selectOption(room_nosName);
        await this.room_nos.selectOption(hotels);
    }
}

module.exports={Searchpage}