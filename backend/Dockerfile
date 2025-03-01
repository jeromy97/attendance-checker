FROM php:8.2-fpm

WORKDIR /var/www

RUN apt-get update && apt-get install -y libpq-dev zip unzip \
    && docker-php-ext-install pdo_mysql \
    && docker-php-ext-enable pdo_mysql

COPY . .
RUN chmod -R 775 storage bootstrap/cache

CMD ["php-fpm"]
