(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{429:function(t,s,v){"use strict";v.r(s);var _=v(15),a=Object(_.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"armpwn-基础知识"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#armpwn-基础知识"}},[t._v("#")]),t._v(" armpwn-基础知识")]),t._v(" "),v("p",[t._v("arm与intel/amd 的架构不同，反汇编不一样，寄存器不一样，函数调用也不一样")]),t._v(" "),v("h3",{attrs:{id:"寄存器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#寄存器"}},[t._v("#")]),t._v(" 寄存器")]),t._v(" "),v("ol",[v("li",[t._v("子程序间通过寄存器"),v("strong",[t._v("R0～R3")]),t._v("来"),v("strong",[t._v("传递参数")]),t._v("。这时，寄存器R0～R3可记作arg0～arg3。"),v("strong",[t._v("被调用的子程序在返回前无需恢复寄存器R0～R3的内容，R0被用来存储函数调用的返回值")]),t._v("。")]),t._v(" "),v("li",[t._v("在子程序中，使用寄存器"),v("strong",[t._v("R4～R11")]),t._v("来"),v("strong",[t._v("保存局部变量")]),t._v("。这时，寄存器R4～R11可以记作var1～var8。如果在子程序中使用了寄存器v1～v8中的某些寄存器，则"),v("strong",[t._v("子程序进入时必须保存这些寄存器的值，在返回前必须恢复这些寄存器的值")]),t._v("。"),v("strong",[t._v("R7经常被用作存储系统调用号，R11存放着帮助我们找到栈帧边界的指针，记作FP")]),t._v("。在Thumb程序中，通常只能使用寄存器R4～R7来保存局部变量。")]),t._v(" "),v("li",[t._v("寄存器"),v("strong",[t._v("R12")]),t._v("用作"),v("strong",[t._v("过程调用中间临时寄存器")]),t._v("，记作IP。在子程序之间的连接代码段中常常有这种使用规则。")]),t._v(" "),v("li",[t._v("寄存器"),v("strong",[t._v("R13")]),t._v("用作"),v("strong",[t._v("堆栈指针")]),t._v("，记作SP。在子程序中寄存器R13不能用作其他用途。"),v("strong",[t._v("寄存器SP在进入子程序时的值和退出子程序时的值必须相等")]),t._v("。")]),t._v(" "),v("li",[t._v("寄存器"),v("strong",[t._v("R14")]),t._v("称为"),v("strong",[t._v("连接寄存器")]),t._v("，记作LR。它用于"),v("strong",[t._v("保存子程序的返回地址")]),t._v("。如果在子程序中保存了返回地址，寄存器R14则可以用作其他用途。")]),t._v(" "),v("li",[t._v("寄存器"),v("strong",[t._v("R15")]),t._v("是"),v("strong",[t._v("程序计数器")]),t._v("，记作PC。它不能用作其它用途。当执行一个分支指令时，"),v("strong",[t._v("PC存储目的地址。在程序执行中，ARM模式下的PC存储着当前指令加8(两条ARM指令后)的位置，Thumb(v1)模式下的PC存储着当前指令加4(两条Thumb指令后)的位置")]),t._v("。")])]),t._v(" "),v("p",[v("code",[t._v("arm")]),t._v("对比与"),v("code",[t._v("intel/amd")]),t._v("的寄存器关系：")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("ARM架构 寄存器名字")]),t._v(" "),v("th",[t._v("寄存器描述")]),t._v(" "),v("th",[t._v("Intel架构 寄存器名")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("R0")]),t._v(" "),v("td",[t._v("通用寄存器")]),t._v(" "),v("td",[t._v("EAX(通常用于计算后的返回值)")])]),t._v(" "),v("tr",[v("td",[t._v("R1~R5")]),t._v(" "),v("td",[t._v("通用寄存器")]),t._v(" "),v("td",[t._v("EBX、ECX、EDX、EDI、ESI")])]),t._v(" "),v("tr",[v("td",[t._v("R6~R10")]),t._v(" "),v("td",[t._v("通用寄存器")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("R11(FP)")]),t._v(" "),v("td",[t._v("栈帧指针")]),t._v(" "),v("td",[t._v("EBP")])]),t._v(" "),v("tr",[v("td",[t._v("R12(IP)")]),t._v(" "),v("td",[t._v("内部程序调用")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("R13(SP)")]),t._v(" "),v("td",[t._v("堆栈指针")]),t._v(" "),v("td",[t._v("ESP")])]),t._v(" "),v("tr",[v("td",[t._v("R14(LP)")]),t._v(" "),v("td",[t._v("链接寄存器")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("R15(PC)")]),t._v(" "),v("td",[t._v("程序计数器")]),t._v(" "),v("td",[t._v("EIP")])]),t._v(" "),v("tr",[v("td",[t._v("CPSR")]),t._v(" "),v("td",[t._v("程序状态寄存器")]),t._v(" "),v("td",[t._v("EFLAGS")])])])]),t._v(" "),v("ul",[v("li",[t._v("r0:参数1，返回时作为返回值1用，通用寄存器1")]),t._v(" "),v("li",[t._v("r1:参数2，返回值，通用寄存器2")]),t._v(" "),v("li",[t._v("r2:参数3，通用寄存器")]),t._v(" "),v("li",[t._v("r3:参数4，通用寄存器")]),t._v(" "),v("li",[t._v("r4 ~ r8:变量寄存器1，2，3，4，5")]),t._v(" "),v("li",[t._v("r7(补充):系统调用时，存放系统调用号，有时也用于作为FP使用。")]),t._v(" "),v("li",[t._v("r9:平台寄存器，该寄存器的意义由平台标准定义")]),t._v(" "),v("li",[t._v("r10,r11:变量寄存器")]),t._v(" "),v("li",[t._v("r11:主要作为FP使用，FP又叫frame pointer即栈基指针，主要在函数中保存当前函数的栈起始位置，用于堆栈回溯")]),t._v(" "),v("li",[t._v("r12:内部过程调用寄存器")]),t._v(" "),v("li",[t._v("r13:栈寄存器SP，主要用于指向当前程序栈顶，配合指令pop/push等")]),t._v(" "),v("li",[t._v("r14:link寄存器，主要用于存放函数的返回地址，即当前函数返回时，知道自己该回到哪儿去继续运行，通常这个是和BL/BLX/CALL指令搭配，这几个指令被调用后，默认会自动将当前调用指令的下一条指令地址保存到LR寄存器当中")]),t._v(" "),v("li",[t._v("r15:PC，主要用于存放CPU取指的地址")])]),t._v(" "),v("h3",{attrs:{id:"堆栈规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#堆栈规则"}},[t._v("#")]),t._v(" 堆栈规则")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("ATPCS规定堆栈为FD类型，即Full Descending，意思是 "),v("strong",[t._v("SP指向最后一个压入的值(栈顶)，数据栈由高地址向低地址生长")]),t._v("，即满递减堆栈，并且对堆栈的操作是8字节对齐。所以经常使用的指令就有"),v("strong",[t._v("STMFD和LDMFD")]),t._v("。")])]),t._v(" "),v("li",[v("p",[t._v("STMFD指令即Store Multiple FULL Descending指令，相当于压栈。"),v("code",[t._v("STMFD SP! ,{R0-R7，LR}")]),t._v("实际上会执行以下命令：")]),t._v(" "),v("div",{staticClass:"language-python line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-python"}},[v("code",[t._v("SP "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SP "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("9")]),t._v(" x "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("共计压入R0"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("R7以及LR一共九个寄存器"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nADDRESS "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" SP\nMEMORY"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ADDRESS"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" LR\n"),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),t._v(" to "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n    MEMORY"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("ADDRESS"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Ri\n    ADDRESS "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ADDRESS "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br")])]),v("p",[t._v("此处也可以看出，事实上的入栈顺序与"),v("code",[t._v("R0-R7，LR")]),t._v("相反。")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("当执行"),v("code",[t._v("SP = SP - 9 x 4")]),t._v("后："),v("img",{attrs:{src:"https://img.lhyerror404.cn/error404/2020-02-03-032143.png",alt:"stack"}})])]),t._v(" "),v("li",[v("p",[t._v("执行"),v("code",[t._v("ADDRESS = SP")]),t._v("后:"),v("img",{attrs:{src:"https://img.lhyerror404.cn/error404/2020-02-03-032503.png",alt:"stack"}})])]),t._v(" "),v("li",[v("p",[t._v("执行"),v("code",[t._v("MEMORY[ADDRESS] = LR")]),t._v("后:"),v("img",{attrs:{src:"https://img.lhyerror404.cn/error404/2020-02-03-032741.png",alt:"stack"}})])]),t._v(" "),v("li",[v("p",[v("code",[t._v("ADDRESS")]),t._v("逐次上移，以此填入寄存器的值。"),v("img",{attrs:{src:"https://img.lhyerror404.cn/error404/2020-02-03-032925.png",alt:"stack"}})]),t._v(" "),v("p",[t._v("这就是arm下的栈布局，入栈指令为"),v("code",[t._v("STMFD SP ,{R0-R7，LR}")]),t._v("，SP指针会在最后回到原位，不会改变SP指针的值。")])])])])]),t._v(" "),v("h3",{attrs:{id:"传参规则和返回值规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#传参规则和返回值规则"}},[t._v("#")]),t._v(" 传参规则和返回值规则")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("1、当参数少于4个时，子程序间通过寄存器R0-R3来传递参数；当参数个数多于4个时，将多余的参数通过数据栈进行传递，入栈顺序与参数顺序正好相反，子程序返回前无需恢复R0~R3的值；\n2、在子程序中，使用R4~R11保存局部变量，若使用需要入栈保存，子程序返回前需要恢复这些寄存器；R12是临时寄存器，使用不需要保存。\n3、ATPCS规定堆栈是满递减堆栈FD；满递增堆栈：堆栈指针指向最后压入的数据，且堆栈由高地址向低地址方向增长\n4、子程序返回32位的整数，使用R0返回；返回64位整数时，使用R0返回低位，R1返回高位。\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br")])]),v("p",[t._v("地址访问:")]),t._v(" "),v("p",[t._v("通常，LDR指令被用来从内存中加载数据到寄存器，STR指令被用作将寄存器的值存放到内存中。")]),t._v(" "),v("div",{staticClass:"language-assembly line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("@ LDR操作：从R0指向的地址中取值放到R2中\nLDR R2, [R0] ; [R0] - 数据源地址来自于R0指向的内存地址\n@ STR操作：将R2中的值放到R1指向的地址中\nSTR R2, [R1] ; [R1] - 目的地址来自于R1在内存中指向的地址\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br")])]),v("h3",{attrs:{id:"aarch64-架构"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#aarch64-架构"}},[t._v("#")]),t._v(" AArch64 架构")]),t._v(" "),v("p",[t._v("需要指出的是，AArch64架构并不是ARM-32架构的简单扩展，他是在ARMv8引入的一种全新架构。")]),t._v(" "),v("p",[t._v("AArch拥有31个通用寄存器，系统运行在64位状态下的时候名字叫Xn，运行在32位的时候就叫Wn。")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("寄存器")]),t._v(" "),v("th",[t._v("别名")]),t._v(" "),v("th",[t._v("意义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("SP")]),t._v(" "),v("td",[t._v("无")]),t._v(" "),v("td",[t._v("Stack Pointer:栈指针")])]),t._v(" "),v("tr",[v("td",[t._v("R30")]),t._v(" "),v("td",[t._v("LR")]),t._v(" "),v("td",[t._v("Link Register:在调用函数时候，保存下一条要执行指令的地址。")])]),t._v(" "),v("tr",[v("td",[t._v("R29")]),t._v(" "),v("td",[t._v("FP")]),t._v(" "),v("td",[t._v("Frame Pointer:保存函数栈的基地址。")])]),t._v(" "),v("tr",[v("td",[t._v("R19-R28")]),t._v(" "),v("td",[t._v("无")]),t._v(" "),v("td",[t._v("Callee-saved registers 类似于自己调用的保存的寄存器")])]),t._v(" "),v("tr",[v("td",[t._v("R18")]),t._v(" "),v("td",[t._v("无")]),t._v(" "),v("td",[t._v("平台寄存器，有特定平台解释其用法。")])]),t._v(" "),v("tr",[v("td",[t._v("R17")]),t._v(" "),v("td",[t._v("IP1")]),t._v(" "),v("td",[t._v("The second intra-procedure-call temporary register……")])]),t._v(" "),v("tr",[v("td",[t._v("R16")]),t._v(" "),v("td",[t._v("IP0")]),t._v(" "),v("td",[t._v("The first intra-procedure-call temporary register……")])]),t._v(" "),v("tr",[v("td",[t._v("R9-R15")]),t._v(" "),v("td",[t._v("无")]),t._v(" "),v("td",[t._v("临时寄存器")])]),t._v(" "),v("tr",[v("td",[t._v("R8")]),t._v(" "),v("td",[t._v("无")]),t._v(" "),v("td",[t._v("在一些情况下，返回值是通过R8返回的")])]),t._v(" "),v("tr",[v("td",[t._v("R0-R7")]),t._v(" "),v("td",[t._v("无")]),t._v(" "),v("td",[t._v("在函数调用过程中传递参数和返回值")])]),t._v(" "),v("tr",[v("td",[t._v("NZCV")]),t._v(" "),v("td",[t._v("无")]),t._v(" "),v("td",[t._v("状态寄存器：N（Negative）负数 Z(Zero) 零 C(Carry) 进位 V(Overflow) 溢出")])])])]),t._v(" "),v("h3",{attrs:{id:"内存操作指令-load-store"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内存操作指令-load-store"}},[t._v("#")]),t._v(" 内存操作指令-load/store")]),t._v(" "),v("p",[t._v("在分析AArch64架构程序时，会发现我们找不到ARM中常见的STMFD/LDMFD命令，取而代之的是STP/LDP命令。")]),t._v(" "),v("p",[t._v("在ARM-v8指令集中，程序支持以下五种寻址方式：")]),t._v(" "),v("ol",[v("li",[t._v("Base register only (no offset) ：基址寄存器无偏移。形如:"),v("code",[t._v("[ base { , #0 } ]")]),t._v("。")]),t._v(" "),v("li",[t._v("Base plus offset：基址寄存器加偏移。形如:"),v("code",[t._v("[ base { , #imm } ]")]),t._v("。")]),t._v(" "),v("li",[t._v("Pre-indexed：事先更新寻址，先变化后操作。形如:"),v("code",[t._v("[ base , #imm ]!")]),t._v("。⚠️：!符号表示则当数据传送完毕之后，将最后的地址写入基址寄存器，否则基址寄存器的内容不改变。")]),t._v(" "),v("li",[t._v("Post-indexed：事后更新寻址，先操作后变化。形如:"),v("code",[t._v("[ base ] , #imm")]),t._v("。")]),t._v(" "),v("li",[t._v("Literal (PC-relative): PC相对寻址。")])]),t._v(" "),v("p",[t._v("常见的Load/Store指令有：")]),t._v(" "),v("p",[t._v("LDR，LDRB，LDRSB，LDRH，LDRSW，STR，STRB，STRH")]),t._v(" "),v("p",[t._v("⚠️：此处R – Register(寄存器)、RB – Byte(字节-8bit)、SB – Signed Byte(有符号字节)、RH – Half Word(半字-16bit)、SW- Signed Word(带符号字-32bit)。")]),t._v(" "),v("h3",{attrs:{id:"环境搭建"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),v("p",[t._v("可以自己搭建一个Deepin的环境")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("安装 git，gdb 和 gdb-multiarch")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("$ "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" update\n$ "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" gdb gdb-multiarch\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])])]),t._v(" "),v("li",[v("p",[t._v("安装Qemu")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("$ "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" qemu-user\n$ "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" qemu-use-binfmt qemu-user-binfmt:i386\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])])]),t._v(" "),v("li",[v("p",[t._v("安装共享库")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libc6-arm64-cross\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libc6-armel-cross\n"),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" libc6-armhf-cross\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br")])])])]),t._v(" "),v("p",[t._v("静态链接的 binary 直接运行即可，会自动调用对应架构的 qemu；\n动态链接的 bianry 需要用对应的 qemu 同时指定共享库路径")]),t._v(" "),v("h3",{attrs:{id:"arm-rop"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#arm-rop"}},[t._v("#")]),t._v(" ARM-rop")]),t._v(" "),v("p",[t._v("一般的Rop和通常的linux下的Rop攻击方式类似")]),t._v(" "),v("p",[t._v("某些题在ARM中，也可以mprotect()函数可以用来修改一段指定内存区域的保护属性。然后进行修改变为可写可执行，进行写一段shellcode。")])])}),[],!1,null,null,null);s.default=a.exports}}]);