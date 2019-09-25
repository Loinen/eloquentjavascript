var image = new Image(); // создание обьекта изображения
image.onload= function(){ //сохранение ссылки на изображение
	ctx2.save(); //сохранение характеристик холста
	ctx2.scale(2,2);
	ctx2.drawImage(image, 0, 0)
	ctx2.restore();
	ctx2.drawImage(image, 0, 300);//прорисовка изображения
	ctx2.scale(0.5,0.5); //уменьшение на 50% 
	ctx2.drawImage(image, 0, 0);
};
image.src = "1.jpg";