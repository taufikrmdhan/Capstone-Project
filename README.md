# Capstone-Project

Cara menjalankan di Local

Import dan koneksi database:
1. Buka XAMPP 
2. Start mysql
3. Buka http://localhost/phpmyadmin
4. Buat database baru dengan nama informasi_db.
5. Import database informasi_db.sql yang ada di direktori Database.

Masuk ke Text editor dan open folder project:
1. Buka terminal dan masuk ke direktori backend.
2. Jalankan beberapa perintah dibawah. <br/>
    npm install <br/>
    npm run start <br/>
3. Jangan stop proses running backend.
4. Tambahkan terminal baru dan masuk ke direktori frontend.
5. Jalankan beberapa perintah di bawah. <br/>
   npm install <br/>
   npm run build <br/>
   npm run start <br/>
6. Buka browser dan web sudah terbuka.


SETUP MIKROKONTROLER

1. Pada arduino kita hubungkan dengan ethernet shield arduino
2. masukan sensor DHT pada PCB dengan kabel jumper pada pin 4
3. sambungkan kabel lan dari ethernet shield arduino ke dalam port lan di komputer lokal
4. setup ip lokal di Control Panel\Network and Internet\Network Connections di adapter ethernet di internet protocol versi 4 buat ip lokal menjadi 192.168.1.2
5. buka arduino IDE masukan potongan kode pada repository ini Mikrokontroler.
6. lakukan upload file pada mikrokontroler agar mikrokontroler mampu mengirimkan data ke dalam komputer lokal 
