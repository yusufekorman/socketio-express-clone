# play pong sound

import pygame
pygame.init()
pygame.mixer.init()
pygame.mixer.music.load("C:\\Users\\furka\\İndirilenler\\pong.wav")
pygame.mixer.music.play()
while pygame.mixer.music.get_busy() == True:
    continue