FROM node:10 AS node
FROM composer:1.8 AS composer
FROM php:7.2-apache

#COPY --from=node /usr/local/bin /usr/local/bin/
#COPY --from=node /opt/yarn-v1.13.0/bin/ /opt/yarn-v1.13.0/bin/
#COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules

COPY --from=node /usr/local/lib/node_modules /usr/local/lib/node_modules
COPY --from=node /opt /opt
COPY --from=node /usr/local/bin /usr/local/bin

COPY --from=composer /usr/bin/composer /usr/bin/composer

RUN apt-get update \
    && apt-get install -y zlib1g-dev unzip git gnupg\
    && docker-php-ext-install zip pdo_mysql \
    && docker-php-ext-install pdo_mysql \
    && a2enmod rewrite

#RUN curl -sL https://deb.nodesource.com/setup_10.x  | bash - \
#    && apt-get -y install nodejs \
#    && npm install

RUN yes | pecl install xdebug \
    && echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)" > /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_enable=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_autostart=off" >> /usr/local/etc/php/conf.d/xdebug.ini