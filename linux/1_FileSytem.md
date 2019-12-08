# 리눅스 운영 및 관리
## 1. 파일 시스템 관련 명령어
###  ※ 권한 및 그룹 설정
#### - 권한의 개요
- 소유권: 파일이나 디렉토리를 소유하는 권리
    + 일반적으로 소유권을 가진 사용자가 허가권을 설정한다.
    + 사용자 소유권/그룹 소유권
- 허가권: 파일이나 디렉터리에 접근하는 권리 
    + 사용자(user), 그룹(group), 다른 사용자(other)
~~~ 
ls -l hello.text
-rw-r--r--    1 root     root           242 Jul 15  2017 hello.txt
~~~
- -rw-r--r-- : 허가권
- root(1): 소유권을 가진 사용자
- root(2): 그룹 소유권
---
10. 다음 중 /tmp 디렉터리의 허가권을 확인하는 명령으로 알맞은 것은?  
① ls -l /tmp  
❷ ls -ld /tmp  
③ chmod -v /tmp	  
④ chmod -R /tmp    
-> 디렉토리는 ld  
---

#### - 관련 명령어
##### ＠ chmod(change mode): 파일이나 디렉토리에 접근할 수 있는 허가권을 설정
~~~
chmod [option] mode file(s)
~~~
- rwx(읽기, 쓰기, 실행)
- u(파일 소유자), g(그룹사용자), o(다른 사용자), a(모든 사용자)
- +/-: 설정 또는 해제
- =는 특정권한만 지정할 때
- 숫자모드는 (4,2,1,0)으로 지정 4(읽기), 2(쓰기), 1(실행)
    + 읽기, 쓰기, 실행 모든 권한 부여하려면 7
    + 읽기 및 쓰기 권한은 6
    + 읽기 및 실행 권한은 5
    + 어떠한 권한도 주지 않으려면 0
    + 사용자 계층별 구분은 소유자/그룹사용자/다른사용자 순으로 지정
---
3. 다음 중 lin.txt 파일의 허가권 값을 알지 못하는 상태에서 'chmod 755 lin.txt' 명령과 동일한 명령으로 알맞은 것은?  
① chmod u+rwx,go+rx lin.txt  
② chmod u=rwx,go+rx lin.txt  
③ chmod u=rwx,a=rx lin.txt  
❹ chmod u=rwx,go=rx lin.txt  
-> 기존 권한을 알지 못하니까 꼭 초기화를 시켜줘야한다(=)
---

##### ＠ chown(change owner): 파일이나 디렉토리의 소유권 및 그룹 소유권을 변경하는 명령
~~~
chown [option] owner[:group] file(s)
~~~
---
9. 다음 조건에 해당하는 명령으로 알맞은 것은?
/data 디렉터리를 포함하여 하위 디렉터리 및 파일의 소유권을 ihduser로 변경한다.  
① chown -r ihduser /data  
❷ chown -R ihduser /data  
③ chown -d ihduser /data  
④ chown -D ihduser /data  
---

##### ＠ chgrp(change group): 파일이나 디렉터리의 소유 그룹을 바꾸는 명령
~~~
chgrp [option] group file(s)
~~~
---
8. 다음 조건에 해당하는 명령으로 알맞은 것은?  
~~~
ihduser 사용자의 홈 디렉터리를 포함한 모든 파일이나 디렉터릴의 그룹 소유권을 ihd로 변경한다.
~~~
   ① chgrp -r ihd ihduser  
   ② chgrp -R ihd ihduser  
   ③ chgrp -r ihd ~ihduser  
   ❹ chgrp -R ihd ~ihduser  
---
##### ＠ umask: 파일이나 디렉터리 생성 시 부여되는 기본 허가권 값을 지정한다.
- *파일 생성시에는 666, 디렉토리인 경우에는 777에서 빼준다.*
- 파일일 경우에는 실행권한이 딱히 중요하지 않다.
- 디렉토리일 경우에는 맨 앞에 d가 온다.
r: 4
w: 2
x: 1
---
6. 다음 중 설정된 umask의 값을 확인할 때 사용하는 명령으로 알맞은 것은?  
① umask -l  		
② umask -v    
③ umask -s	  	
❹ umask -S  

1. 다음 중 설정된 umask의 값이 0022일 때 생성되는 파일의 허가권 값으로 알맞은 것은?  
   ❶ -rw-r--r--		② -rw-rw-r--
   ③ -rwxr-xr-x		④ -rwxrwxr-x
-> 파일이니까 666에서 빼주면 644니까 -rw-/r--/r--
---

#### - 특수권한(Set-Bit)
- root권한이 필요할 때 root 권한을 주기는 어려우니 일부 권한을 허용하는 특별한 권한
- Set-UID / Set-GID / Sticky-Bit
---
4. 다음 중 특수 권한인 Set-Bit를 활용한 사례로 가장 거리가 먼 것은?  
① 디렉터리에 Set-GID를 설정  
② 실행 파일에 Set-GID를 설정  
③ 디렉터리에 Sticky-Bit를 설정  
❹ 실행 파일에 Sticky-Bit를 설정  
-> Sticky-Bit은 디렉토리에만 설정할 수 있다.

5. 다음 중 특수 권한인 Set-Bit가 설정된 파일로 알맞은 것은?  
① /bin/ln		  
② /etc/passwd  
③ /etc/shadow	  
❹ /usr/bin/passwd  
-> 일반 사용자가 자신의 비밀번호를 바꾸기 위해서는 root권한이 필요하다.  
줄 수 없으니 /etc/shadow에 접근하려면 
usr/bin/passwd에 특수권한을 준다. 그러면 /etc/shadow 와 /etc/passwd 가 모두 바뀐다.

~~~
[root@www ~]# ls -ld /project
drwxrwx---. 2 root project 4096 2019-04-13 07:33 /project
[root@www ~]# chmod o+t /project
~~~
7. 다음 명령을 실행했을 경우 /project 디렉터리의 허가권 값으로 알맞은 것은?  
   ① drwxrwx--t		❷ drwxrwx--T
   ③ drwxrws--t		④ drwxrws--T  
-> 현재 other사용자의 실행 권한이 없기 때문에 그룹의 공유 모드로만 사용하는 대문자 T를 쓴다.   
-> 만약 실행권한이 있었으면 x자리(실행권한)에 소문자 t로 표시한다. 
---
###  ※ 파일시스템의 관리
#### - 리눅스의 파일 시스템
##### ＠ 리눅스의 파일 시스템
- minix: 리눅스 파일 시스템의 모태 
- ext: 2gb, 255글자
- ext2: ext다음
- ext3: ext2 확장판, 저널링 파일 시스템
- ext4: 16tb
- Reiserfs: 한스라이저가 개발한 저널링 파일 시스템
- XFS
- JFS
- xiafs
- msdos: FAT
- umsdos
- vfat: FAT-32
- isofs: ISO 9660인 CD-ROM
- nfs: 네트워크 상 파일을 공유할 때 사용
- smb: 네트워크 파일
- ncpfs
- sysv
- proc: 가상파일 시스템
---
10. 다음 중 생성할 수 있는 파일의 크기가 가장 큰파일 시스템으로 알맞은 것은?  
    ❶ XFS		② ext2
    ③ ext3		④ ext4
---
#### - 관련 명령어

##### ＠ mount: 보조기억장치(HDD,FDD,CD-ROM등)나 파일 시스템이 다른 디스크를 /의 하위 디렉터리로 연결하여 사용가능하게 해주는 명령어 특정한 옵션없이 mount 명령을 내리면 현재 마운트된 장치가 디스크를 확인할 수 있다.
- 옵션
    + -a: /etc/fstab에 명시된 파일시스템을 마운트할 때
    + -t *fs_type*: 파일시스템의 유형을 지정하는 옵션
    + -o: 마운트할때 추가적인 설정
- 주요 파일 시스템의 유형(t)
    + msdos: FAT-16
    + vfat: FAT-32
    + ntfs: NT
    + ext2, ext3, ext4: 리눅스 시스템
    + iso9660: CD-ROM, DVD
    + smbfs: 삼바 파일
    + cifs: smbfs의 확장
    + udf: DVD(iso9660이어도 가능)
- -o의 주요 항목
    + ro: 읽기 전용으로 마운트
    + rw: 읽기/쓰기 모드로 마운트(기본값)
    + rwmount: 해당 파티션을 다시 마운트
    + loop: loop디바이스로 마운트. CD-ROM 이미지 파일인 iso를 마운트할때 사용
    + noatime: 파일의 내용을 변경해야만 access time 변경한다. 성능향상
---
3. 다음 중 삼바 파일 시스템을 마운트 할 때 지정하는 유형 값으로 알맞은 것은?  
   ① nfs		② udf
   ❸ cifs		④ iso9660

9. 다음 중 /home 영역을 다시 마운트 하는 명령으로 알맞은 것은?  
   ① mount -o re /home		  
   ② mount -t re /home  
   ❸ mount -o remount /home  
   ④ mount -t remount /home  
-> t는 마운트할떄의 타입과 관련된 옵션이다
---
##### ＠ unmount: 마운트된 파일시스템을 해제시킨다.

##### ＠ eject: CD-ROM, DVD등과 같이 이동식 보조 기억장치의 미디어를 꺼낼 때 사용한다. 이 명령을 사용하면 자동으로 언마운트 작업을 수행한다.
- 기본 DVD 또는 CD-ROM 장치를 언마운트한 후에 디스크 트레이(Tray)를 연다.
---
~~~
# (괄호) /dev/cdrom
~~~  
8. 다음은 CD-ROM 드라이브의 트레이(Tray)를 여는 과정이다. ( 괄호 ) 안에 들어갈 내용으로 알맞은 것은?  
① umount		  
❷ eject  
③ exec		  
④ dumpe2fs  
---

##### ＠ fdisk: 디스크 파티션을 확인하고 추가/삭제하는 명령으로 설정 후에는 반드시 재부팅을 해야 한다.

##### ＠ mkfs(make filesystem): 새로운 파일 시스템을 만드는 명령으로 root만 사용 가능한다. 파일 시스템 유형을 지정하지 않으면 ext2로 생성된다.

##### ＠ mk2efs: ext2, ext3, ext4 파일 시스템을 만드는 명령이다. 파일 시스템 유형을 지정하지 않으면 ext2로 생성된다.
- 사용법
~~~
# mk2efs [option] 장치명
~~~
- 주요 옵션
    + j: 저널링(journaling) 파일 시스템인 ext3
    + t *fs_type*: 파일 시스템의 유형을 지정한다. 
---
5. 다음 중 리눅스에서 사용 가능한 파일시스템을 생성하는 명령으로 틀린 것은?  
   ① mke2fs /dev/sdb1  
   ② mke2fs -j /dev/sdb  
   ③ mke2fs -t ext4 /dev/sdb1  
   ❹ mke2fs -j ext4 /dev/sdb1    
-> 1번은 ext2로 생성  
-> 2번은 저널링이므로 ext3로 생성  
-> 3번은 파일시스템 타입을 ext4로 특정하여 생성  
-> 4번은 저널링이므로 파일 타입을 치면 오류
---

##### ＠ fsck(filesytem check): 리눅스 파일 시스템을 검사하고 수리하는 명령이다. 

##### ＠ e2fsck: 리눅스 파일시스템 검사하고 수리

##### ＠ df(disk free): 현재 마운트된 디스크의 크기, 사용량, 남아있는 용량에 대한 정보를 출력한다.

##### ＠ du(disk usage): 파일이나 디렉터리들이 디스크에서 차지하고 있는 크기를 출력한다.
---
2. 다음 중 ihduser 사용자의 홈 디렉터리 총 사용량을 단위를 붙여서 출력하는 명령으로 알맞은 것은?  
   ① df -hT ~ihduser	② df -sh ~ihduser
   ③ du -hT ~ihduser	❹ du -sh ~ihduser  
-> du(disk usage): 디스크 사용량  
-> sh(총 사용량)  
-> ~ihduser: 사용자의 홈 디렉토리
---
#### - 관련 파일
##### ＠ /etc/fstab: 파일 시스템에 대한 다양한 정보를 담고 있는 파일. 부팅 시에 마운트할 파티션 정보가 기록되어 있는 파일. 파티션 정보를 변경하였거나 디스크를 추가한 경우 이 파일에 등록해야만 부팅 시에 자동으로 마운트할 수 있다.
~~~
# <file system> <mount pt>      <type>  <options>       <dump>  <pass>
/dev/root       /               ext2    rw,noauto       0       1
proc            /proc           proc    defaults        0       0
tmpfs           /run            tmpfs   mode=0755,nosuid,nodev  0       0
sysfs           /sys            sysfs   defaults        0       0
~~~
- 첫번쨰: 장치명
- 두번쨰: 마운트 될 디렉터리
- 세번째: 파일 시스템의 유형
- 네번째: 마운트될 때의 옵션
---
7. 다음 중 /etc/fstab의 두 번째 필드에 해당하는 값으로 알맞은 것은?  
① 장치명		  
② 파일 시스템의 유형  
❸ 마운트 될 디렉터리	  
④ 마운트 될 때의 옵션  
---

#### - Disk Quota
- 사용자의 용량을 제한한다.
##### ＠ quotacheck: 디스크를 사용하고 있는 파일 시스템을 체크하여 quota 기록파일을 업데이트친다.
- aquota.user, aquota.group 또는 quota.user, auota.group을 업데이트
---
6. 다음 중 aquota.user와 같은 쿼터 기록 파일을 생성하는 명령으로 알맞은 것은?  
   ① edquota		② setquota
   ③ repquota		❹ quotacheck
---
##### ＠ eduquota: 사용자나 그룹에 쿼터를 설정할때 사용하는 명령. vi 편집기가 나온다.
---
4. 다음 중 사용자에 대한 쿼터를 설정할 때 사용하는 명령으로 알맞은 것은?  
   ① quota		❷ edquota
   ③ repquota		④ quotacheck  
-> edquota posein 입력하면 vi 편집기가 나온다.
---
##### ＠ eduquota: 사용자나 그룹에 쿼터를 설정할때 사용하는 명령. vi 편집기가 나온다.

##### ＠ quotaon/quotaoff: 쿼터 섲렁을 활성화/비활성화

##### ＠ repquota: 파일 시스템 단위로 쿼터 설정 정보를 출력해준다.

##### ＠ quota: 사용자 단위로 쿼터 설정 정보를 출력해준다.

##### ＠ setquota: 쿼러를 설정하는 명령. vi편집기가 아니라 직접 명령창에서 수행.

##### ＠ 사용자 쿼터 설정하기
1. etc/fstab 설정
    + 4번쨰 필드(마운트될 옵션)에 *usrquota*를 추가로 기입한다.
---
1. 다음 중 사용자 쿼터를 설정하기 위해 /etc/fstab에 설정하는 항목 값으로 알맞은 것은?  
① quota  
② uquota  
❸ usrquota		  
④ userquota  
---

##### ＠ 그룹 쿼터 설정하기
1. etc/fstab 설정
    + 4번쨰 필드(마운트될 옵션)에 *grpquota*를 추가로 기입한다.
---