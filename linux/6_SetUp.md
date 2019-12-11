# 리눅스 운영 및 관리
## 6. 장치 설정
###  ※ 주변장치 연결 및 설정
#### - 프린터

##### ＠ 프린팅 시스템의 개요
초기에는 LPRng를 기본으로 사용했으나 최근 배포판에서는 CUPS를 사용한다.
- LPRng: 버클리 프린팅 시스템. BSD계열 유닉스. 라인 프린터 데몬 프로토콜 사용. /etc/printcap. BSD, System v계열 모두 지원
- CUPS: 애플이 개발한 오픈 소스 프린팅 시스템. HTTP기반의 IPP 사용. SMB 프로토콜 부분사용. lpadmin.BSD, System v계열 모두 지원
    + CUPS 관련 파일
        * /etc/cups/cupsd.conf: CUPS 프린터 데몬 환경설정파일. 아파치의 httpd.conf와 유사
        * /etc/cups/printers.conf: 프린터 큐 관련 환경 설정파일. lpadmin이나 웹을 통해 제어
        * /etc/cups/classes.conf: CUPS 프린터 데몬의 클래스 설정파일
        * cupsd: CUPS의 프린터 데몬
- BSD계열 명령어: lpr, lpq, lprm
- System V계열 명령어: lp, lpstat, cancel
---
45. 다음 중 프린팅 시스템인 CUPS의 데몬 환경 설정 파일로 알맞은 것은?  
    ① /etc/cups/cupsd  
    ❷ /etc/cups/cupsd.conf  
    ③ /etc/cups/classes.conf  
    ④ /etc/sups/printers.conf  

43. 다음 중 ( 괄호 )안에 들어갈 내용으로 알맞은 것은?  
~~~
CUPS는 (ㄱ)기반의 (ㄴ)을(를) 사용하고, (ㄷ)프로토콜도 부분적으로 지원한다.   
관련 명령어도 (ㄹ)와(과) (ㅁ)계열 모두 사용 가능하고, 사용자 및 호스트 기반의 인증을 제공한다.
~~~
    ❶ ㉠ : HTTP, ㉡ : IPP, ㉢ : SMB, ㉣ : BSD, ㉤ : System V  
    ② ㉠ : HTTP, ㉡ : NFS, ㉢ : CIFS, ㉣ : Linux, ㉤ : Windows  
    ③ ㉠ : RFC 1179, ㉡ : IPP, ㉢ : SMB, ㉣ : BSD, ㉤ : System V  
    ④ ㉠ : RFC 1179, ㉡ : NFS, ㉢ : CIFS, ㉣ : Linux, ㉤ : Windows  
---
##### ＠ 프린터의 설정
X-Windwos 상에서 설정한다. printtool, printconf에서 redhat-config-printer를 거쳐 최근에는 system-config-printer를 사용한다. 
- 직렬 연결시: /dev/lp0
- USB포트로 연결시: /dev/usb/lp0
- CUPS 사용시 http://localhost:631

- 네트워크 프린터로 설정하는 경우
    + AppSocket/HP JetDirect: 프린터가 컴퓨터에 연결되어 있지 않고 네트워크에 연결
    + Internet Printing Protocol(ipp): IPP 프로토콜 기반
    + Internet Printing Protocol(http): Https 프로토콜기반
    + LPD/LPR Host or Printer: LPRng같은 LPD프린터
    + Windows Printer via SAMBA: 윈도우 시스템에 연결된 프린터 설정. SMB프로토콜 사용

#### - 사운드 카드
##### ＠ 고급 리눅스 사운드 아키텍쳐(ALSA:Advanced Linux Sound Architecture)
사운드 카드를 자동으로 구성하고 다수의 사운드 장치를 관리한다. 1998년 Jaroslav Kysela. 현재는 GPL, LGPL 라이선스 기반 배포. OSS(Open Sound System)지원을 받아서 하드웨어 기반 미디 합성, 다중 채넣 하드웨어 믹싱, 전이중 통신, 다중 프로세서와의 조화, 스레드 안전장치 드라이버 기능

##### ＠ 오픈 사운드 시스템(Open Sound System)
사운드를 만들고 캡쳐하는 인터페이스. Hannu Savolainen
---
47. 다음에서 설명하는 주변 장치 인터페이스로 알맞은 것은?  
~~~
- 1992년에 Hannu Savolainen에 의해 개발  
- 2007년 7월에 Linux의 GPL기반 라이선스로 소스를 공개  
- 2008년 4월에 BSD라이선스 기반으로 소스를 추가로 공개  
~~~
    
    ❶ OSS		② SANE  
    ③ ALSA		④ CUPS  
---
#### - 스캐너
##### ＠ SANE(Scanner Access Now Easy)
평판 스캐너, 핸드 스캐너, 비딩 캠 등 이미지 관련 하드웨어를 사용할 수 있도록 해주는 API. OS/2, Microrosoft Windows도 지원. sane-backedns와 sane-frontends 2개로 배포된다.

##### ＠ XSANE(X based for the SANE)
X-Windows 기반 SANE, GTK+ 라이브러리로 만들어졌고 스캔 뿐만 아니라 이미지 작업도 가능. xsane라고 입력하면 실행할 수 있다.
---
48. 다음 중 XSANE 스캐너 프로그램 개발 시 기반이 된 라이브러리로 알맞은 것은?  
    ① Xt		② Qt  
    ③ GDK+		❹ GTK+  

47. 다음 중 스캐너 및 이미지 수정작업을 수행할 수 있는 프로그램인 XSANE를 실행하기 위한 명령으로 알맞은 것은?  
    ❶ xsane		② x-sane  
    ③ sane-frontends	④ https://www.xsane.org  
---

###  ※ 주변장치 활용
#### - 프린터 관련 명령어
BSD 계열과 System V계열이 있다. 대부분의 배보판에서는 두 계열의 명령어를 모두 지원한다.  
- BSD 계열: lpr, lpq, lprm, lpc
- System V계열: lp, lpstat, cancel

##### ＠ lpr(BSD 프린터 작업을 요청한다.)
- 사용법
~~~
# lpr [option] [파일명]
~~~
- 주요 옵션
    + -#값: 인쇄할 매수(1-100) 지정
    + -m: 작업완료시 이메일 전송
    + -P: 프린터명: 기본 설정된 프린터 이외에 다른 프린터를 지정할 때 사용한다.
    + -T: 타이틀 설정
    + -r: 출력뒤 파일 삭제
    + -l: 필터링 없이 보낸다.
- 사용 예
~~~
# lpr -# 2 -P lp test.txt
~~~
-> test.txt라는 문서를 lp라는 프린터로 2장 출력한다.
~~~
# cat test.txt | lpr
~~~
-> cat명령과 파이프를 이용해 출력한다.
~~~
# cat test.txt > /dev/lp0
~~~
-> 직렬포트인경우 출력
~~~
# pr -180 test.txt | lpr
~~~
-> pr명령과 파이프로 출력
~~~
# lpr -r test.txt
~~~
-> test.txt 출력하고 파일 삭제
---
43. 다음 중 kait.txt 파일 내용을 인쇄하기 위한 명령으로 가장 거리가 먼 것은?  
    ❶ cat kait.txt ＜ /dev/lp0  
    ② lpr kait.txt  
    ③ cat kait.txt ＞ /dev/lp0  
    ④ cat kait.txt | lpr  
-> 방향이 >로 가야한다...
---
##### ＠ lpq(BSD 프린터 큐에 있는 작업의 목록 출력)
- 사용법
~~~
# lpq [option]
~~~
- 주요 옵션
    + -a: 설정되어 있는 모든 프린터의 작업정보를 출력
    + -l: 출력 결과를 자세하게 출력(long format)
    + -P 프린터명: 특정 프린터 지정
- 사용 예
~~~
# lpq
~~~
-> 프린터 큐의 작업 목록을 출력한다.

##### ＠ lprm(BSD 프린터큐에 대기중인 작업을 삭제한다.)
작업번호를 입력해주는데 입력하지 않으면 가장 마지막에 요청한 작업을 삭제한다.
- 사용법
~~~
# lprm [option] [파일명]
~~~
- 주요 옵션
    + -: 프린터 큐에 있는 모든 작업을 취소한다.
    + -U: 지정한 사용자의 인쇄 작업을 취소한다.
    + -P 프린터명: 특정 프린터를 지정할 때 사용한다.
    + -h 서버[:port]: 지정한 서버의 인쇄 작업을 취소한다.
- 사용 예 
~~~
# lprm 3
~~~
-> 작업번호 3번 프린트 작업을 취소한다.
~~~
# lprm -
~~~
-> 모든 작업을 취소한다.

##### ＠ lpc(BSD 라인 프린터 컨트롤 프로그램으로 프린터나 프린터 큐를 제어)
- 주요 명령
    + disable: 새로운 프린터 작업못하게 한다.
    + enable: 프린트 작업을 가능하게 한다.
    + down: 지정한 프린터를 사용할 수 없게 한다.
    + up: 모든 환경을 활성화 시키고 관련 데몬을 새롭게 구동한다.
    + help, ?: 사용가능한 명령을 출력한다.
    + quit, exit: lpc명령을 종료한다.
- 사용 예 
~~~
[root@www~ ]# lpc
lpc>help
Commands may be abbreviated. Commands are: 
exit    help    quit    status  ?
lpc>
~~~
-> 최근 배포판의 lpc 명령은 상태 정보만 확인할수있다.

##### ＠ lp(System V계열의 인쇄 명령)
- 사용법
~~~
# lp [option] [파일명]
~~~
- 주요옵션
    + -d: 다른 프린터를 지정한다.
    + -n: 인쇄할 매수를 지정한다.
- 사용 예
~~~
# lp /etc/passwd
~~~
-> /etc/passwd 파일의 내용을 출력한다.
~~~
# lp -n 2 /etc/passwd
~~~
-> /etc/passwd 파일의 내용을 2장 출력한다.

##### ＠ lpstat(System V 프린터 큐의 상태를 출력해준다.)
- 사용법
~~~
# lpstat [option]
~~~
- 주요 옵션
    + -p: 프린터의 인쇄 가능 여부를 출력한다.
    + -t: 프린터의 상태 정보를 출력한다.
    + -a: 받아들이는 요청들의 상태를 출력한다.
- 사용 예 
~~~
# lpstat
~~~
-> 프린터 큐의 상태를 출력한다.
~~~
# lpstat -p
~~~
-> 프린터의 인쇄가능여부를 출력한다.

##### ＠ cancel(System V 프린트 작업을 취소하는 명령으로 lpstat을 이용하여 먼저 아이디를 알아내야 한다.)
- 사용법
~~~
# cancel 요청-아이디
~~~
- 주요 옵션
    + -a: 모든 인쇄 작업을 취소한다.
- 사용 예
~~~
# cancel printer-7
~~~
요청 아이디가 printer-7인 작업을 취소한다.

44. 다음 중 ( 괄호 )안에 들어갈 내용으로 가장 거리가 먼 것은?  
~~~
리눅스에서는 프린트 관련 명령어는 BSD계열과 System V계열 명령어로 나눌 수 있다.   
BSD 계열 명령어에는 (ㄱ) 등이 있고, System V계열에는 (ㄴ)등이 있다.
~~~
    ① lpr, lp		❷ lpc, lprm  
    ③ lpr, lpstat		④ lpc, cancel  

#### - 사운드 관련 명령어
##### ＠ alsactl(ALSA 사운드 카드를 제어하는 명령어)
- 사용법
~~~
# alsactl [option] [명령]
~~~
- 주요 옵션
    + -d: 디버그 모드사용(--debug)
    + -f: 환경 설정 파일을 선택한다. 기본 파일은 /etc/asound.state
- command
    + store: 사운드카드에 대한 정보를 환경 설정 파일에 저장한다.
    + restore: 환경 설정 파일로부터 선택된 사운드 카드 정보를 다시 읽어들인다.
    + init: 사운드 장치의 카드를 초기화한다.
- 사용 예
~~~
# alsactl init
~~~
-> ALSA 사운드 카드를 초기화한다.
---
46. 다음 중 사운드 카드를 제어하는 명령어인 alsactl의 옵션에 대한 설명으로 틀린 것은?  
    ① -E : 환경 변수를 설정한다.  
    ② -f : 환경 설정 파일을 지정한다.  
    ③ -i : init을 위한 설정 파일을 지정한다.  
    ❹ -p : restore와 init 에러를 지정한 파일에 저장한다.  
---
##### ＠ alsamixer(커서 라이브러리 기반의 ALSA사운드 카드 오디오 믹서 프로그램)
~~~
# alsamixer
~~~

##### ＠ cdparanoia(오디오 CD에서 음악 파일 추출)
~~~
# cdparanoia [option]
~~~
- 주요 옵션
    + -w: wav 파일로추출한다.(기본 옵션)
    + -a: Aplle AIFF-C포맷으로 추출
    + -B: 모든 트랙의 음악을 Cdda2wav스타일로 추출. 'track#' 형태로 파일 생성
- 사용 예
~~~
# cdparanoia -B
~~~
-> 디스크 전체에서 각 트랙별로 추출해서 파일로 생성한다.
~~~
# cdparanoia "1:[:30.12]-1[1:10]
~~~
-> 1번의 0:30.12부터 1:10.00까지 추출한다.
~~~
# cdparanoia -- "-3"
~~~
-> 트랙 3번부터 추출한다.

#### - 스캐너 관련 명령어
##### ＠ sane-find-scanner
USB 및 SCSI 스캐너와 관련 장치 파일을 찾아주는 명령이다.  
- SCSI 스캐너: /dev/sg0, /dev/scanner
- USB 스캐너: /dev/usb/scanner, /dev/usb/scanner, /dev/usbscanner

- 사용법 
~~~
# sane-find-scanner [option] [장치파일명]
~~~
- 주요 옵션
    + -q: 스캐너 장치만 출력한다.
    + -v: 자세한 정보를 출력한다.
    + -p: 직렬 포트 스캐너만 찾는다.
~~~
# sane-find-scanner -v
~~~
-> 사용 가능한 SCSI 및 USB스캐너를 모두 찾아 자세히 정보를 출력한다.
~~~
# sane-find-scanner /dev/scanner
~~~
-> SCSI스캐너인 /dev/scanner에 대한 정보만 출력한다.
~~~
# sane-find-scanner -p
~~~
-> 직렬 포트 스캐너만 찾아서 출력한다.

---
46. 다음 중 USB로 연결된 스캐너를 검색하기 위한 명령으로 가장 알맞은 것은?  
    ❶ sane-find-scanner -v  
    ② sane-find-scanner -p  
    ③ sane-find-scanner /dev/sg0  
    ④ sane-find-scanner /dev/scanner  
---
##### ＠ scanimage
이미지를 스캔한다.
~~~
# scanimage [option]
~~~
- 주요 옵션
    + -h: 도움말 옵션
    + -d: SANE 장치 파일명을 적는 옵션(--device-name)
    + --format: 이미지 형식을 지정하는 옵션으로 pnm과 tiff를 지정한다. 옵션 설정하지 않으면 디폴드는 pnm이다.
    + -L: 사용 가능한 스캐너의 목록 출력(--list)
- 사용 예
~~~
# scanimage -L
~~~
-> 스캐너 목록을 출력한다.
~~~
# scanimage > image.pnm
~~~
-> 이미지를 기본 설정된 값으로 image.pnm으로 저장한다.
~~~
# scanimage -x 100 -y 100 --format=ttf > image.ttf
~~~
-> 100*100 mm 크기로 스캔하고 이미지파일을 image.ttf로 저장한다.
---
45. scanimage 명령어를 사용하여 이미지를 스캔하려고 한다. 다음 중 기본으로 적용되는 이미지 형식으로 알맞은 것은?  
    ① tiff		② jpg  
    ③ psd		❹ pnm  
---

##### ＠ scanadf(자동문서 공급장치가 장착된 스캐너에서 여러장의 사진 스캔)
~~~
# scanadf [option]
~~~
- 주요 옵션
    + -h: 도움말 옵션
    + -d: SANE 장치 파일명(--device-name)
    + -L: 사용가능한 스캐너 목록
- 사용 예
~~~
# scanadf -L
~~~
-> 스캐너 목록을 출력한다.

##### ＠ xcam
GUI기반의 평판 스캐너나 카메라로부터 이미지 스캔
~~~
# xcam
~~~