# 리눅스 운영 및 관리
## 5. 소프트웨어 설치
###  ※ 개념 및 사용방법
#### - 프로그램 설치의 개요
- 리눅스에 사용되는 프로그램은 C언어로 된 소스파일을 tar 압축하여 배포된다. 소스 프로그램은 GNU 웹 사이트 같은데서 무료 배포되고 압축 도구에 따라 tar.Z, tar.gz, tar.bz2, tar.xz 등으로 압축된다. 압축 풀고 소스파일 수정하는게 어려우므로 리눅스 배포한에서는 쉬운 프로그램의설치, 삭제 , 관리 등을 위해 독자적인 패키지 관리기법을 만들었는데 레드헷의 rpm, 데비안의 dpkg, 수세의 YaST등이 있다.

#### - 소스 설치법
압축 풀기 -> 디렉터리 이동 -> configure -> make -> make install
- configure: make하기 위한 환경설정
- make: 컴파일, 실행파일을 만든다.
- make install: 설치
--- 
36. 다음 설명에 해당하는 명령으로 알맞은 것은?  
~~~
타겟(target)과 의존성(dependencies) 관련 작업을 수행한 후에 최종적으로 실행 파일을 만든다.
~~~
    ① configure		❷ make  
    ③ make target	④ make install  

35. 다음 중 소스 설치 과정에서 configure 작업으로 생성된 다양한 파일을 제거할 때 사용하는 명령으로 알맞은 것은?  
    ① make clear		❷ make clean  
    ③ make remove	④ make uninstall  

40. 다음 중 소스(source) 설치 과정의 순서로 알맞은 것은?  
    ① configure → Makefile → make  
    ② Makefile → configure → make  
    ③ Makefile → make → make install  
    ❹ configure → make → make install  

42. 다음 중 소스 파일 설치와 관련된 명령으로 틀린 것은?  
    ① make		② cmake  
    ❸ Makefile		④ configure  
---
##### ＠ cmake: make하지않고 make파일 생성한다.

#### - 패키지 설치법
##### ＠ RPM(Red Hat Package Manager)
.rpm 형태의 파일로 배포하고 rpm 명령을 사용하여 손쉽게 설치 및 갱신, 제거 ,검증, 질의 할 수 있다.  
*패키지이름-버전-릴리즈-아키텍쳐.rpm*
- 패키지 이름: 어떤 패키지
- 버전: 패키지의 버전
- 릴리즈: 한 버전의 패키지를 몇번 빌드했는지
- 아키텍쳐: 패키지가 사용할 수 있는 시스템 
~~~
sendmail-8.12.8-6.i386.rpm
~~~
-> 초기의 rpm 파일 형식이다.
~~~
httpd-2.4.6-3.fc21.x86_64.rpm
~~~
-> 릴리즈 버전 필드에 리눅스 버전도 함께 표시한다.

##### ＠ dpkg 데비안 패키지 관리(Debian Package Manager)
*패키지이름_버전-릴리즈-아키텍쳐.rpm*
- 패키지 이름: 어떤 패키지
- 버전: 패키지의 버전
- 릴리즈: 한 버전의 패키지를 몇번 빌드했는지
- 아키텍쳐: 패키지가 사용할 수 있는 시스템 
~~~
cron_3.0pl1-124_i386.deb
~~~

###  ※ 소프트웨어 설치 및 삭제
#### - tar와 압축관련 유틸리티

##### ＠ tar(tape archive)
원래는 테이프 관련 파일 묶는거였다.
~~~
$ tar [option] [파일명]
~~~
-> 옵션 사용시 -기호를 사용하지 않아도 되지만 인자값(argument)가 있는 옵션을 여러개 지정할 때는 -를 써야한다.

- 주요 옵션
    + -c: 지정한 파일이나 디렉터리를 하나로 묶어 새로운 tar 파일을 생성한다.
    + -x: 생성된 tar파일을 푼다.
    + -v: 어떤 명령을 실핼할 때 대상이 되고 있는 파일들을 보여준다. 압축할때 압축되고있는 파일명 보여줄 수 있다.
    + -f 파일명: 작업대상이 되는 tar 파일의 이름을 지정한다.
    + -r: 기존의 tar 파일 뒤에 파일을 추가한다.
    + -t: tar 파일 안에 묶여 있는 파일의 목록을 출력한다.
    + -h: 심볼릭 링크가 가리키고 있는 원본 파일을 저장한다.
    + -C: 디렉터리를 변경한다.
    + -p: 파일이 생성되었을때의 권한을 그대로 유지한다.
    + -Z: compress 관련 옵션
    + -z: gzip 관련 옵션
    + -j: bzip2관련 옵션
    + -J: xz관련 옵션
~~~
$ tar cvf posein.tar *.c
~~~
-> .c로 끝나느 파일들을 posein.tar로 압축하는데 이름을 보여주면서 압축한다.
~~~
$ tar cf posein.tar posein/
~~~
-> posein 디렉터리와 서브디렉터리 모두 posein.tar로 묶는다.
~~~
$ tar xvf posein.tar
~~~
-> 현재 디렉터리에 posin.tar 파일을 푼다. 풀면서 보여준다
~~~
$ tar rvf posein.tar jalin.txt yuloge.c
~~~
-> posein.tar에 jalin.txt와 yuloge.c를 추가하여 함께 묶는다.
~~~
$ tar tvf posein.tar
~~~
-> posein.tar의 내용을 보여준다.
~~~
$ tar zcvf posein.tar.gz *.c
~~~
-> 현재 디렉터리에서 .c로 끝나는 모든 파일을 gzip압축과 동시에 posein.tar.gz로 묶는다.
~~~
$ tar zxvf php-4.0.4.tar.gz
~~~
-> php-4.0.4.tar.gz 파일을 푼다.
~~~
$ tar jxvf php-5.1.4.tar.bz2
~~~
-> php-5.1.4.tar.bz2 파일을 푼다.
~~~
$ tar Jxvf php-5.5.4.tar.xz -C /usr/local/src
~~~
-> xz로 압축된 php-5.5.4.tar.xz를 /usr/local/src에 푼다.

---
36. 다음은 ihd.tar 파일을 압축해제 없이, 내용만 확인하는 과정이다. ( 괄호 ) 안에 들어갈 내용으로 알맞은 것은?  
~~~
# tar ( 괄호 ) ihd.tar
~~~    
    ① cvf		② rvf  
    ❸ tvf		④ xvf  

38. 다음은 기존에 생성된 ihd.tar 파일에 lin.txt 파일을 추가하는 과정이다. ( 괄호 ) 안에 들어갈 내용으로 알맞은 것은?  
~~~
# tar ( 괄호 ) ihd.tar lin.txt
~~~
    ① cvf		❷ rvf  
    ③ tvf		④ xvf  
---

##### ＠ compress, uncompress
유닉스에서 사용했던거지만 압축률이 낮아서 지금은 많이 안쓴다. .Z
~~~
$ compress [option] 파일명
$ uncompress [option] 파일명
~~~
- 주요 옵션
    + -c: 표준 출력, tar랑 사용할땐 꼭 붙여준다.
    + -v: 압축 관련 정보를 출력한다.
- 사용 예
~~~
$ compress text.txt
~~~
-> text.txt 파일은 사라지고 text.txt.Z가 생긴다
~~~
$ compress posein.tar
~~~
-> posein.tar 파일을 압축한다. posein.tar.Z가 생긴다.
~~~
$ tar cvf - * | compress > backup.tar.Z
~~~
-> 현재 디렉토리의 모든 파일을 tar로 묶고 compress로 압축하여 backup.tar.Z로 저장한다.
~~~
uncompress -c backup.tar.Z | tar xvf - 
~~~
-> backup.tar.Z를 압축풀고 tar파일을 압축푼다.
---
37. 다음 중 압축의 효율성이 가장 낮은 명령은?  
    ① xz		② gzip  
    ③ bzip2		❹ compress  
---
##### ＠ gzip, gunzip(GNU zip)
GNU에서 만든 압축프로그램 .gz
~~~
$ gzip [option] 파일명
$ gunzip [option] 파일명
~~~
- 주요 옵션
    + -d: 압축을 풀때 사용
    + -1: 파일의 압축 시간을 줄인다. 압축률은 줄어든다(--fast)
    + -9: 최대로 압축한다. 압축 시간은 오래걸린다.
    + -c: 표준 출력, tar와 같이 작업
    + -l: 압축 파일에 대한 정보 출력
- 사용 예
~~~
$ gzip posein.tar
~~~
-> posein.tar를 압축한다. posein.tar.gz가 생긴다.
~~~
$ gunzip posein.tar.gz
~~~
-> posein.tar.gz 파일을 압축 푼다. ('gzip -d posein.tar.gz'와 같다.)
~~~
$ gzip -cd yuloje.tar.gz | tar xvf -
~~~
-> yuloje.tar.gz를 압축풀고 tar파일을 압축푼다.
~~~
$ zcat posein.txt.gz
~~~
-> gzip 패키지에 있는 명령어로 압축되어있는 텍스트 파일의내용을 확인할때 사용한다.
---
40. 다음 중 gzip으로 압축된 텍스트 파일의 내용을 확인하는 명령으로 알맞은 것은?  
    ① gcat		❷ zcat  
    ③ lzcat		④ ypcat  
---
##### ＠ bzip2, bunzip2
- 버로우즈-휠러 변환. 블록 정렬 알고리즘과 허브만 부호화  
- 줄리안 시워드가 만든 압축 프로그램 gzip보다는 압축률을 좋지만 시간은 오래걸린다. .bz2
~~~
$ bzip2 [option] 파일명
$ bunzip2 [option] 파일명
~~~
- 주요 옵션
    + -d: 압축을 풀떄 사용
    + -1: 파일의 압축시간을 줄이지만 압축률은 떨어진다.
    + -9: 파일을 최대로 압축한다. 압축률은 좋지만 시간이 오래걸린다.
    + -c: 표준 출력, tar와 사용
    + -f: bzip2, bunzip2명령은 디폴트는 덮어쓰기를 하지 않지만 이걸쓰면 덮어쓰기를 한다.
- 사용 예
~~~
$ bzip2 posein.tar
~~~
-> posein.tar 를 압축하여 posein.tar.bz2 생성
~~~
$ bunzip2 posein.tar.bz2
~~~
-> posein.tar.bz2 파일의 압축을 푼다. 'bzip2 -d posein.tar.bz2'와 같다.

##### ＠ xz, unxz
LZMA2알고리즘. 데이터 무손실. 매우 높은 압축률. 많이 사용한다.
~~~
$ xz [option] 파일명
$ unxz [option] 파일명
~~~
- 주요 옵션
    + -z: 압축할 때 
    + -d: 압축풀 때
~~~
$ xz posein.tar
~~~
-> posein.tar를 압축한다. posein.tar.xz가 생긴다.
~~~
$ unxz posein.tar.xz
~~~
-> posein.tar.xz를 푼다.
---
41. 다음 중 압축 효율성이 좋은 순서로 나열된 것은?  
    ① xz ＞ gzip ＞ bzip2		❷ xz ＞ bzip2 ＞ gzip  
    ③ bzip2 ＞ gzip ＞ xz		④ bzip2 ＞ xz ＞ gzip  
---
##### ＠ zip, unzip 
DOS/Windows
~~~
$ zip [option] 압축파일명 파일명
$ unzip 압축파일명
~~~
- 주요 옵션
    + -r: 압축 대상이 디렉터리인 경우에 하위 디렉터리를 포함하여 압축한다.
~~~
$ zip posein posein.tar
~~~
-> posein.tar를 posein이라는 이름으로 압축한다. posein.zip이라는 파일이 생긴다.
~~~
$ zip -r backup data/
~~~
-> data/ 디렉터리 아래에 모든 서브디렉터리까지 모두 backup.zip으로 압축한다.
~~~
$ unzip posein.zip
~~~
-> posein.zip을 푼다.

#### - rpm 사용법

##### ＠ rpm 사용법
(1)설치 및 갱신 / (2)제거 / (3)질의 / (4)검증 모드 / (4)소스 rpm(.src.rpm)의 리빌드(rebuild)모드 등 총 5가지
~~~
$ rpm [option] [패키지_파일명]
~~~

##### ＠ rpm (1) 설치(install) 및 갱신(upgrade)
새로운 패키지를 설치하거나 갱신할 수 있다.
- 주요 옵션
    + -i: 새로운 패키지를 설치할때 사용한다.(--install)
    + -U: 기존의 패키지를 업그레이드(--upgrade)
    + -F: 이전 버전이 설치되어 잇는 경우에만 설치(--freshen)
    + -v: 메세지를 자세히 보여준다.
    + -h: 설치 상황을 '#' 기호로 표시해준다.(--hash)
    + --force: 강제 설치
    + --nodeps: 의존성 무시 강제 설치
    + -vv: 메세지를 아주 자세히 보여준다.
    + --test: 설치되는지 볼때 테스트
~~~
$ rpm -i gftp-2.0.19-fc15.i686.rpm
~~~
-> 해당 rpm 패키지를 설치한다.
~~~
$ rpm -Uvh vsftpd-2.2.2--11.el5_4.1.i686.rpm
~~~
-> 해당 패키지를 업그레이드 설치해주고, 진행상황과 메시지를 표시한다.
~~~
rpm -Fvh /usr/local/src/*.rpm
~~~
-> 현재 설치된 패키지만 찾아서 업그레이드 해주고 진행상황과 메시지를 표시한다.
---
42. 다음 중 rpm의 설치 관련 옵션으로 틀린 것은?   
    ❶ -fvh		② -Fvh  
    ③ -Uvh		④ -ivh  
-> Fresh는 대문자
---
##### ＠ rpm (2) 제거모드(erase)
설치된 패키지를 제거한다. -e
- 주요 옵션
    + -e: 삭제한다. 의존성을 가진 패키지는 삭제되지 않는다.
    + --nodeps: 의존성을 갖는 패키지가 존재해도 다 삭제한다.
    + --test: 테스트
    + --allmatches: 동일한 이름 패키지 모두 삭제
- 사용 예
~~~
$ rpm -e eog
~~~
-> eog패키지 제거. 의존성이 있으면 제거되지 않는다.
~~~
$ rpm -e httpd --nodeps
~~~
-> httpd패키지 제거 의존성이 있어도 제거

##### ＠ rpm (3) 질의모드(query)
패키지 관련 정보를 알아내기 위해 -q 옵션을 사용한다.
- 관련 옵션
    + -q: 질의(--query)
    + -i: 설치된 패키지의 정보를 출력(--info)
    + l: 패키지에서 설치한 모든 파일정보를 출력(--list)
    + a: 시스템에 설치된 모든 패키지 목록을 출력한다.(--all)
    + -p 패키지파일명: rpm패키지의 파일에 대한 정보를 준다.
    + -f 파일명: 지정한 파일을 설치한 패키지 이름을 출력한다.
    + -c: 설정 파일이나 스크립트 파일 출력
    + -d: 문서파일 출력
    + -R: 어떤 패키지에 의존하는지?(--require)
    + --changelog: 특정 패키지 바뀐 히스토리
    + --scripts: 설치 및 제거 관련 스크립트
    + --filesbypkg: rpm패키지가 많을 경우 목록으로 보이는 파일 앞에 패키지명을 붙인다.
    + --queryformat: 질의의 결과를 원하는 형태로 출력할 때 (c언어의 printf와 유사)
~~~
$ rpm -qa 
~~~
-> 시스템의 모든 패키지의 정보를 출력한다.
~~~
$ rpm -qa | grep mail
~~~
-> 시스템의 모든 패키지 중에 mail이라는 문자열이 들어있는 패키지를 출력한다.
~~~
$ rpm -qi sendmail
~~~
-> sendmail 패키지에 대한 정보를 출력한다.
~~~
$ rpm -ql sendmail
~~~
-> sendamil 패키지가 설치한 파일 목록을 출력한다.
~~~
$ rpm -qc sendmail
~~~
-> sendmail 패키지 관련환경설정이나 실행 데몬 스크립트를 출력한다.
~~~
$ rpm -qf /bin/ls
~~~
-> /bin/ls 파일을 설치한 패키지 정보를 출력한다.
~~~
$ rpm -qd grub
~~~
-> grub 패키지 관련 문서 및 man 페이지 파일 정보를 출력한다.
~~~
$ rpm -qR sendmail
~~~
-> sendmail이 의존하고 있는 패키지 정보를 출력한다.
~~~
$ rpm -q --changelog sendmail
~~~
-> sendmail이 바뀐 내역을 최근부터 연대순으로 보여준다.
~~~
$ rpm -q --scripts sendmail
~~~
-> sendmail의 인스톨 및 인스톨 관련 스크립트를 보여준다.
~~~
$ rpm -qip totem-2.28.6-2.el6.i686.rpm
~~~
-> 패키지 파일에 대한 정보를 출력한다.
~~~
$ rpm -qlp totem-2.2.8.6-2.el6.i686.rpm
~~~
-> 패키지 파일에서 설치되는 파일 목록 정보를 출력한다.
~~~
$ rpm -qp --filesbypkg *.rpm
~~~
-> 확인하고자 하는 패키지 파일이 많은 경우 각 파일 앞에 패키지 이름을 덧붙여 출력한다.
~~~
$ rpm -qa --queryformat "%10{size} ${name}\n"
~~~
-> 패키지를 사용자가 원하는 형태로 출력

##### ＠ rpm (4) 검증모드
rpm 데이터베이스에 저장되어있는 메타 데이터를 이용하여 변경된정보를 찾아내는 모드 -V(--verify), 파일의 크기, 허가권, 소유권, 파일 형식 등에 대한 변경 정보 출력
- 검증 코드 
    + S: 파일 크기(File Size) 변경
    + M: 파일 모드(File Mode) 변경
    + 5: 메세지 다이제스트 변경 보통 MD5변경
    + D: 장치 파일의 메이저 및 마이너 번호 불일치
    + L: 링크 파일 경로 불일치
    + U: 소유자 변경
    + G: 그룹 소유권 변경
    + T: 수정시간 변경
    + P: 권한 변경
    + .: 테스트 통과 
    + ?: 테스트수행불가
- 관련 옵션
    + -V: 검증시 옵션(--verify)
    + -a: 모든 패키지 검사
~~~
$ rpm -Va
~~~
-> 시스템에 설치된 모든 패키지 검사
~~~
$ rpm -V vsftpd
~~~
-> vsfspd를 검사한다.
~~~
#### - yum

##### ＠ yum(Yellowdog Updater, Modefied)
rpm기반 시스템에서 패키지를 손쉽게 설치해주고 자동으로 업데이트를 수행해준다. yum은 트웨어 저장소(repository)에 관련 패키지들을 모아주고 네트워크를 통해 의존성을 검사하여 설치 및 업데이트를 수행한다. APT와 유사하다.

##### ＠ yum 관련 파일 및 디렉터리
- yum 환경설정파일: /etc/yum.conf
- yum 설치 및 업데이트 위한 저장소 관련 파일: /etc/yum.repos.d
    + 네트워크 작업용 저장소 파일: CentOS-Base.repo
        * [base]: yum 패키지 서버의 기본 경로
        * [updates]: 업데이트된 패키지를 위한 경로 설정
        * [extras]: 추가 패키지 경로
        * [centoplus]: 기능적 확장 패키지 경로
        * [contrib]: CentOS 사용자들에 의해 제작된 패키지 경로
    + 로컬의 CD-ROM, DVD-ROM 작업용 저장소 파일: CentOS-Media.repo
- yum 작업 경로: /var/log/yum.log

---
35. 다음 중 yum 명령의 저장소 관련 파일들이 위치하는 디렉터리로 알맞은 것은?  
    ① /etc/yum		② /etc/yum.d  
    ③ /etc/yum.repos	❹ /etc/yum.repos.d  
---

##### ＠ yum 사용법
- 사용법
~~~
# yum [option] [command] [패키지_파일명]
~~~
- 주요 옵션
    + -y: 모든 질의에 'yes'라고 답한다.
    + -v: 자세한 정보를 출력한다.(--verbose)
- command
    + list [항목]: 전체 패키지에 대한 정보를 출력한다.
    + info [항목]: 패키지에 대한 정보를 출력한다.
    + check-update: 업데이트가 필요한 패키지를 출력한다. 'yum list updates'와 같다.
    + update [패키지명]: 패키지 업데이트
    + install [패키지명]: 패키지 설치.의존성관련 패키지도 함께 설치해준다.
    + search [문자열..]: 문자열이 포함된 패키지를 찾아준다.
    + remove [패키지명]: 패키지를 삭제할때 사용
    + grouplist: 패키지 그룹에 대한 정보 출력
    + groupinfo 패키지 그룹명: 해당 패키지 정보 출력
    + groupupdate 패키지 그룹명: 지정한 그룹의 패키지를 업데이트한다.
    + groupinstall 패키지그룹명: 지정한 그룹의 패키지를 설치한다.
    + groupremove 패키지그룹명: 지정한 그룹의 패키지를 삭제한다.
    + whatprovides: 특정한 파일이나 기능과 관련된 패키지 정보를 검색한다.
    + clean [값]: yum 관련해서 저장된 정보를 삭제할 때 사용한다.
    + history: yum명령을 사용한 작업 이력 출력
- 사용 예
~~~
# yum list
~~~
-> 전체 패키지에 대한 정보를 출력한다. 기본값이 'yum list all'
~~~
yum list installed
~~~
-> 설치된 패키지에 대한 정보를 출력
~~~
yum list updates
~~~
-> 업데이트가 필요한 패키지에 대한 정보를 출력
~~~
# yum info
~~~
-> 모든 패키지에 대한 정보를 출력한다.
~~~
# yum info telnet-server
~~~
-> telnet-server에 대한 정보를 출력한다.
~~~
# yum update
~~~
-> 설치되어 있는 전체 패키지를 업데이트한다.
~~~
# yum update gzip
~~~
-> gzip 패키지를 업데이트한다.
~~~
# yum install telnet-server
~~~
-> telnet-server 패키지를 설치한다. 의존성패키지도 자동설치
~~~
# yum search player music
~~~
-> player과 music이라는 문자열이 들어있는 패키지를 찾아준다.
~~~
# yum install -y rhythmbox
~~~
-> rhythmbox 설치시 질의할때 무조건 [y]를 선택한다.
~~~
# yum remove telnet-server
~~~
-> telnet-server 제한다.
~~~
# yum grouplist
~~~
-> 패키지 그룹별 설치 정보를 출력한다. 설치된 그룹은 Installed Groups에 표기되고, 설치되지 않은 그룹은 Availabe Groups에 표기된다.
~~~
# yum groupinfo 'High Availability'
~~~
-> High Availability라는 그룹과 연관된 패키지 정보를 보여준다.
~~~
# yum groupdupdate 'Print Server'
~~~
-> 'Print Server'그룹의 패키지를 업데이트한다.
~~~
# yum groupinstall 'CIFS file server'
~~~
-> 'CIFS file server' 그룹의 패키지를 설치한다.
~~~
# yum groupremove Eclipse
~~~
-> Eclipse 그룹에 속한 패키지를 삭제한다.
~~~
# yum wharprovides portmap
~~~
-> portmap과 관련 있는 패키지 정보를 출력한다.
~~~
# yum clean all
~~~
-> yum 관련 모든 정보를 삭제한다.
~~~
# yum history
~~~
-> yum 관련한 작업 이력을 출력한다.
~~~
# yumdownloader --destdir=/usr/local/src vsftpd
~~~
-> yum을 이용해서 rpm 패키지를 설치할 수있다.  
-> vsftpd 관련 rpm 파일을 /usr/local/src에 설치한다.

---
39. 다음 중 totem 패키지를 설치하는 과정에서 질의 시 무조건 승낙하는 명령으로 알맞은 것은?  
    ① yum -i -y totem		② yum -f -y totem  
    ③ yum install -f totem		❹ yum install -y totem  
---

#### - dpkg 사용법
##### ＠ dpkg 사용법
- 사용법
~~~
# dpkg [option] [패키지명] [패키지파일명]
~~~
- 주요 옵션
    + -i 패키지파일명: 패키지를 설치할 때 사용한다(--install)
    + -R 디렉터리명: -i와 같이 사용하여 지정한 디렉터리 안에 있는 패키지를 설치할 때 사용한다.
    + -l: 설치되어 있는 패키지를 출력한다.(--list)
    + -l 패키지파일명: 패키지 파일에 대한 정보를 출력한다.(--info)
    + -c 패키지파일명: 패키지 파일에 포함된 파일 정보를 출력한다.(--contents)
    + -L 패키지명: 패키지가 설치한 파일 목록을 출력한다.(--listfiles)
    + -r 패키지명: 패키지 제거. 환경설정파일은 남는다(--remove)
    + -P 패키지명: 환경설정 파일까지 전부 제거한다.(--purge)
    + -S 파일명: 해당 파일을 설치한 패키지 이름을 출력한다.(--search)
    + -C: 완전히 설치되지 않은 패키지를 검사한다.(--audit)
    + --unpack 패키지파일명: 환경설정하지않고 패키지 풀기만한다.
    + --configure 패키지명: --unpack옵션으로 풀린 패키지를 환경설정한다.
    + -a: --configure시 패키지명 대신에 이 옵션을 사용하면 언팩된 패키지들에 대한 환경설정을 한다(--pending)
    + -s 패키지명: 패키지에 대한 상태를 출력한다.(--status)
- 사용 예
~~~
# dpkg -i /usr/debian/stable/binary-i386/admin/vim_4.5.3.deb
~~~
-> 지정한 패키지를 설치한다.
~~~
# dpkg -i -R /usr/debian/stable/binary-i386/admin
~~~
-> 지정한 디렉터리 안에 있는 모든 패키지를 설치한다.
~~~
# dpkg -L vim
~~~
-> vim 패키지에서 설치된 파일을 목록으로 보여준다. 'dpkg --listfiles vim'
~~~
# dpkg -l "*vi*"
~~~
-> vi라는 패턴과 일치하는 패키지들을 출력한다. 'dpkg --list '*vi*'
~~~
# dpkg --unpack vim_4.5-3.deb
~~~
-> 해당 패키지를 풀기만 한다.
~~~
# dpkg --configure vim
~~~
-> --unpack 옵션에 의해 풀린 패키지의 환경 설정을 한다.
~~~
# dpkg -r cron
~~~
-> cron 패키지를 제거하지만 환경 설정 파일은 제거되지 않는다.
~~~
# dpkg -P cron
~~~
-> cron 패키지를 환경설정 파일까지 모두 삭제한다.
~~~
# dpkg -s mc
~~~
-> mc 패키지에 대한 패키지 버전, 패키지 관리자 , 패키지에 대한 설명, 환경 설정 파일에 대한 정보를 출력한다.

#### - apt-get 사용법
##### ＠ apt-get 
데비안 리눅스 배포판 yum과 유사하다. /etc/apt/sources.list 파일에 패키지 관련 정보를 관리한다.
~~~
apt-get [option] [command] [패키지명]
~~~
- 주요 옵션
    + -y: 모든 질의에 'yes'라고 답한다.(--yes, --assume-yes)
    + --purge: remove 명령을 수행할 때 환경설정 파일까지 삭제한다.
- command 
    + update: 패키지 목록을 갱신(관련 정보는 /etc/apt/sources.list에서 가져온다)
    + upgrade: 모든 패키지를 최신 버전으로 업그레이드 (update후에)
    + install 패키지명: 패키지 설치(/var/cache/apt/archive에 .deb파일 생성)
    + remove 패키지명: 패키지를 삭제한다.
    + clean: /var/cache/apt/archive에 생성된 파일을 삭제한다.
-사용 예
~~~
# apt-get update
~~~
-> 패키지 목록을 갱신한다.
~~~
# apt-get install nautilus
~~~
-> 패키지를 설치한다.
~~~
# apt-get remove nautilus
~~~
-> 패키지를 삭제한다. 환경설정 파일은 남겨둔다.
~~~
# apt-get clean
~~~
-> /var/cache/apt/archive에 있는 파일 모두 삭제

