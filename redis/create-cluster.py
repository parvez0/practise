import socket
import time
import os
import subprocess

HOST = os.environ.get('host', '192.168.155.133')
P1 = os.environ.get('p1', 6384)
P2 = os.environ.get('p2', 6385)
P3 = os.environ.get('p3', 6386)
print(P1, 'Port 1')
print(P2, 'Port 2')
print(P3, 'Port 3')

while True:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    redis1 = sock.connect_ex((HOST, P1))
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    redis2 = sock.connect_ex((HOST, P2))
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    redis3 = sock.connect_ex((HOST, P3))
    print(str(redis1)+ " " + str(redis2) + " " + str(redis3))
    if redis1 == 0 and redis2 == 0 and redis3 == 0:
       print("Port is open")
       output = subprocess.Popen("yes yes | redis-cli --cluster create 192.168.155.133:6384 192.168.155.133:6385 192.168.155.133:6386", stdout=subprocess.PIPE, shell=True).stdout
       while True:
        line = output.readline()
        if(line != b''):
            print(line)
        else:
            break
       break
    else:
       print("Port is not open")
    time.sleep(2)
