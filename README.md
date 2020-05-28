## React Native Heroicons

[![npm version](https://img.shields.io/npm/v/react-native-heroicons.svg)](https://www.npmjs.com/package/react-native-heroicons)
[![npm downloads](https://img.shields.io/npm/dm/react-native-heroicons.svg)](https://www.npmjs.com/package/react-native-heroicons)

### Installation

**Requires react-native-svg v9 or higher**

```sh
yarn add react-native-heroicons react-native-svg
```

### Usage

```javascript
import React from "react";
import { Sparkles } from "react-native-heroicons";

const App = () => {
  return <Sparkles />;
};

export default App;
```

Icons can be sized - based on height (default: 24)

```javascript
<Sparkles size={42} />
```

You can also include the whole icon pack:

```javascript
import React from "react";
import * as Icons from "react-native-heroicons";

const App = () => {
  return <Icons.Sparkles />;
};

export default App;
```

### Available Icons

```md
.
├── Adjustments
├── AdjustmentsOutline
├── Annotation
├── AnnotationOutline
├── Archive
├── ArchiveOutline
├── ArrowCircleDown
├── ArrowCircleDownOutline
├── ArrowCircleLeft
├── ArrowCircleLeftOutline
├── ArrowCircleRight
├── ArrowCircleRightOutline
├── ArrowCircleUp
├── ArrowCircleUpOutline
├── ArrowDown
├── ArrowDownOutline
├── ArrowLeft
├── ArrowLeftOutline
├── ArrowNarrowDown
├── ArrowNarrowDownOutline
├── ArrowNarrowLeft
├── ArrowNarrowLeftOutline
├── ArrowNarrowRight
├── ArrowNarrowRightOutline
├── ArrowNarrowUp
├── ArrowNarrowUpOutline
├── ArrowRight
├── ArrowRightOutline
├── ArrowUp
├── ArrowUpOutline
├── ArrowsExpand
├── ArrowsExpandOutline
├── AtSymbol
├── AtSymbolOutline
├── BadgeCheck
├── BadgeCheckOutline
├── Ban
├── BanOutline
├── Bell
├── BellOutline
├── BookOpen
├── BookOpenOutline
├── Bookmark
├── BookmarkAlt
├── BookmarkAltOutline
├── BookmarkOutline
├── Briefcase
├── BriefcaseOutline
├── Calendar
├── CalendarOutline
├── Camera
├── CameraOutline
├── Cash
├── CashOutline
├── ChartBar
├── ChartBarOutline
├── ChartPie
├── ChartPieOutline
├── ChartSquareBar
├── ChartSquareBarOutline
├── Chat
├── ChatAlt
├── ChatAlt2
├── ChatAlt2Outline
├── ChatAltOutline
├── ChatOutline
├── Check
├── CheckCircle
├── CheckCircleOutline
├── CheckOutline
├── ChevronDown
├── ChevronDownOutline
├── ChevronLeft
├── ChevronLeftOutline
├── ChevronRight
├── ChevronRightOutline
├── ChevronUp
├── ChevronUpOutline
├── Clipboard
├── ClipboardCheck
├── ClipboardCheckOutline
├── ClipboardCopy
├── ClipboardCopyOutline
├── ClipboardList
├── ClipboardListOutline
├── ClipboardOutline
├── Clock
├── ClockOutline
├── CloudDownload
├── CloudDownloadOutline
├── CloudUpload
├── CloudUploadOutline
├── Code
├── CodeOutline
├── Cog
├── CogOutline
├── Collection
├── CollectionOutline
├── ColorSwatch
├── ColorSwatchOutline
├── CreditCard
├── CreditCardOutline
├── CurrencyDollar
├── CurrencyDollarOutline
├── CurrencyEuro
├── CurrencyEuroOutline
├── CurrencyPound
├── CurrencyPoundOutline
├── CurrencyRupee
├── CurrencyRupeeOutline
├── CurrencyYen
├── CurrencyYenOutline
├── CursorClick
├── CursorClickOutline
├── DesktopComputer
├── DesktopComputerOutline
├── Document
├── DocumentAdd
├── DocumentAddOutline
├── DocumentDownload
├── DocumentDownloadOutline
├── DocumentDuplicate
├── DocumentDuplicateOutline
├── DocumentOutline
├── DocumentRemove
├── DocumentRemoveOutline
├── DocumentReport
├── DocumentReportOutline
├── DotsCircleHorizontal
├── DotsCircleHorizontalOutline
├── DotsHorizontal
├── DotsHorizontalOutline
├── DotsVertical
├── DotsVerticalOutline
├── Download
├── DownloadOutline
├── Duplicate
├── DuplicateOutline
├── EmojiHappy
├── EmojiHappyOutline
├── EmojiSad
├── EmojiSadOutline
├── Exclamation
├── ExclamationCircle
├── ExclamationCircleOutline
├── ExclamationOutline
├── ExternalLink
├── ExternalLinkOutline
├── Eye
├── EyeOff
├── EyeOffOutline
├── EyeOutline
├── Filter
├── FilterOutline
├── Fire
├── FireOutline
├── Flag
├── FlagOutline
├── Folder
├── FolderAdd
├── FolderAddOutline
├── FolderDownload
├── FolderDownloadOutline
├── FolderOutline
├── FolderRemove
├── FolderRemoveOutline
├── Globe
├── GlobeAlt
├── GlobeAltOutline
├── GlobeOutline
├── Hand
├── HandOutline
├── Hashtag
├── HashtagOutline
├── Heart
├── HeartOutline
├── Home
├── HomeOutline
├── Inbox
├── InboxIn
├── InboxInOutline
├── InboxOutline
├── InformationCircle
├── InformationCircleOutline
├── Key
├── KeyOutline
├── Library
├── LibraryOutline
├── LightBulb
├── LightBulbOutline
├── LightningBolt
├── LightningBoltOutline
├── Link
├── LinkOutline
├── LocationMarker
├── LocationMarkerOutline
├── LockClosed
├── LockClosedOutline
├── LockOpen
├── LockOpenOutline
├── Logout
├── LogoutOutline
├── Mail
├── MailOpen
├── MailOpenOutline
├── MailOutline
├── Menu
├── MenuAlt1
├── MenuAlt1Outline
├── MenuAlt2
├── MenuAlt2Outline
├── MenuAlt3
├── MenuAlt3Outline
├── MenuAlt4
├── MenuAlt4Outline
├── MenuOutline
├── Microphone
├── MicrophoneOutline
├── MinusCircle
├── MinusCircleOutline
├── Moon
├── MoonOutline
├── Newspaper
├── NewspaperOutline
├── OfficeBuilding
├── OfficeBuildingOutline
├── PaperClip
├── PaperClipOutline
├── Pause
├── PauseOutline
├── Pencil
├── PencilAlt
├── PencilAltOutline
├── PencilOutline
├── Phone
├── PhoneIncoming
├── PhoneIncomingOutline
├── PhoneOutgoing
├── PhoneOutgoingOutline
├── PhoneOutline
├── Photograph
├── PhotographOutline
├── Play
├── PlayOutline
├── Plus
├── PlusCircle
├── PlusCircleOutline
├── PlusOutline
├── Printer
├── PrinterOutline
├── Puzzle
├── PuzzleOutline
├── Qrcode
├── QrcodeOutline
├── QuestionMarkCircle
├── QuestionMarkCircleOutline
├── ReceiptRefund
├── ReceiptRefundOutline
├── Refresh
├── RefreshOutline
├── Reply
├── ReplyOutline
├── Scale
├── ScaleOutline
├── Search
├── SearchOutline
├── Selector
├── SelectorOutline
├── Share
├── ShareOutline
├── ShieldCheck
├── ShieldCheckOutline
├── ShieldExclamation
├── ShieldExclamationOutline
├── ShoppingBag
├── ShoppingBagOutline
├── ShoppingCart
├── ShoppingCartOutline
├── SortAscending
├── SortAscendingOutline
├── SortDescending
├── SortDescendingOutline
├── Sparkles
├── SparklesOutline
├── Speakerphone
├── SpeakerphoneOutline
├── Star
├── StarOutline
├── Stop
├── StopOutline
├── Sun
├── SunOutline
├── Support
├── SupportOutline
├── SwitchHorizontal
├── SwitchHorizontalOutline
├── SwitchVertical
├── SwitchVerticalOutline
├── Tag
├── TagOutline
├── Template
├── TemplateOutline
├── Terminal
├── TerminalOutline
├── ThumbDown
├── ThumbDownOutline
├── ThumbUp
├── ThumbUpOutline
├── Ticket
├── TicketOutline
├── Translate
├── TranslateOutline
├── Trash
├── TrashOutline
├── TrendingDown
├── TrendingDownOutline
├── TrendingUp
├── TrendingUpOutline
├── Upload
├── UploadOutline
├── User
├── UserAdd
├── UserAddOutline
├── UserCircle
├── UserCircleOutline
├── UserGroup
├── UserGroupOutline
├── UserOutline
├── UserRemove
├── UserRemoveOutline
├── Users
├── UsersOutline
├── ViewBoards
├── ViewBoardsOutline
├── ViewGrid
├── ViewGridAdd
├── ViewGridAddOutline
├── ViewGridOutline
├── ViewList
├── ViewListOutline
├── VolumeOff
├── VolumeOffOutline
├── VolumeUp
├── VolumeUpOutline
├── X
├── XCircle
├── XCircleOutline
├── XOutline
├── ZoomIn
├── ZoomInOutline
├── ZoomOut
└── ZoomOutOutline
```
