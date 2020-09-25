#!/bin/bash
# Run ffmpeg. If it crashes, try again. 

cmd="ffmpeg -loglevel info \
-f v4l2 -framerate 30 -video_size 320x240 -i /dev/video0 \
-f mpegts -codec:v mpeg1video -s 320x240 -b:v 2000k -bf 0 \
https://radiant-oasis-49153.herokuapp.com/momimsafe"

until $cmd ; do
        echo "restarting ffmpeg command..."
        sleep 2
done
