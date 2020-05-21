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
├── Adjustments.tsx
├── AdjustmentsOutline.tsx
├── Annotation.tsx
├── AnnotationOutline.tsx
├── Archive.tsx
├── ArchiveOutline.tsx
├── ArrowCircleDown.tsx
├── ArrowCircleDownOutline.tsx
├── ArrowCircleLeft.tsx
├── ArrowCircleLeftOutline.tsx
├── ArrowCircleRight.tsx
├── ArrowCircleRightOutline.tsx
├── ArrowCircleUp.tsx
├── ArrowCircleUpOutline.tsx
├── ArrowDown.tsx
├── ArrowDownOutline.tsx
├── ArrowLeft.tsx
├── ArrowLeftOutline.tsx
├── ArrowNarrowDown.tsx
├── ArrowNarrowDownOutline.tsx
├── ArrowNarrowLeft.tsx
├── ArrowNarrowLeftOutline.tsx
├── ArrowNarrowRight.tsx
├── ArrowNarrowRightOutline.tsx
├── ArrowNarrowUp.tsx
├── ArrowNarrowUpOutline.tsx
├── ArrowRight.tsx
├── ArrowRightOutline.tsx
├── ArrowUp.tsx
├── ArrowUpOutline.tsx
├── AtSymbol.tsx
├── AtSymbolOutline.tsx
├── BadgeCheck.tsx
├── BadgeCheckOutline.tsx
├── Ban.tsx
├── BanOutline.tsx
├── Bell.tsx
├── BellOutline.tsx
├── BookOpen.tsx
├── BookOpenOutline.tsx
├── Bookmark.tsx
├── BookmarkAlt.tsx
├── BookmarkAltOutline.tsx
├── BookmarkOutline.tsx
├── Briefcase.tsx
├── BriefcaseOutline.tsx
├── Calendar.tsx
├── CalendarOutline.tsx
├── Camera.tsx
├── CameraOutline.tsx
├── Cash.tsx
├── CashOutline.tsx
├── ChartBar.tsx
├── ChartBarOutline.tsx
├── ChartPie.tsx
├── ChartPieOutline.tsx
├── ChartSquareBar.tsx
├── ChartSquareBarOutline.tsx
├── Chat.tsx
├── ChatAlt.tsx
├── ChatAlt2.tsx
├── ChatAlt2Outline.tsx
├── ChatAltOutline.tsx
├── ChatOutline.tsx
├── Check.tsx
├── CheckCircle.tsx
├── CheckCircleOutline.tsx
├── CheckOutline.tsx
├── ChevronDown.tsx
├── ChevronDownOutline.tsx
├── ChevronLeft.tsx
├── ChevronLeftOutline.tsx
├── ChevronRight.tsx
├── ChevronRightOutline.tsx
├── ChevronUp.tsx
├── ChevronUpOutline.tsx
├── Clipboard.tsx
├── ClipboardCheck.tsx
├── ClipboardCheckOutline.tsx
├── ClipboardCopy.tsx
├── ClipboardCopyOutline.tsx
├── ClipboardList.tsx
├── ClipboardListOutline.tsx
├── ClipboardOutline.tsx
├── Clock.tsx
├── ClockOutline.tsx
├── CloudDownload.tsx
├── CloudDownloadOutline.tsx
├── CloudUpload.tsx
├── CloudUploadOutline.tsx
├── Code.tsx
├── CodeOutline.tsx
├── Cog.tsx
├── CogOutline.tsx
├── Collection.tsx
├── CollectionOutline.tsx
├── ColorSwatch.tsx
├── ColorSwatchOutline.tsx
├── CreditCard.tsx
├── CreditCardOutline.tsx
├── CurrencyDollar.tsx
├── CurrencyDollarOutline.tsx
├── CurrencyEuro.tsx
├── CurrencyEuroOutline.tsx
├── CurrencyPound.tsx
├── CurrencyPoundOutline.tsx
├── CurrencyRupee.tsx
├── CurrencyRupeeOutline.tsx
├── CurrencyYen.tsx
├── CurrencyYenOutline.tsx
├── CursorClick.tsx
├── CursorClickOutline.tsx
├── DesktopComputer.tsx
├── DesktopComputerOutline.tsx
├── Document.tsx
├── DocumentAdd.tsx
├── DocumentAddOutline.tsx
├── DocumentDownload.tsx
├── DocumentDownloadOutline.tsx
├── DocumentDuplicate.tsx
├── DocumentDuplicateOutline.tsx
├── DocumentOutline.tsx
├── DocumentRemove.tsx
├── DocumentRemoveOutline.tsx
├── DocumentReport.tsx
├── DocumentReportOutline.tsx
├── DotsCircleHorizontal.tsx
├── DotsCircleHorizontalOutline.tsx
├── DotsHorizontal.tsx
├── DotsHorizontalOutline.tsx
├── DotsVertical.tsx
├── DotsVerticalOutline.tsx
├── Download.tsx
├── DownloadOutline.tsx
├── Duplicate.tsx
├── DuplicateOutline.tsx
├── EmojiHappy.tsx
├── EmojiHappyOutline.tsx
├── EmojiSad.tsx
├── EmojiSadOutline.tsx
├── Exclamation.tsx
├── ExclamationCircle.tsx
├── ExclamationCircleOutline.tsx
├── ExclamationOutline.tsx
├── ExternalLink.tsx
├── ExternalLinkOutline.tsx
├── Eye.tsx
├── EyeOff.tsx
├── EyeOffOutline.tsx
├── EyeOutline.tsx
├── Filter.tsx
├── FilterOutline.tsx
├── Flag.tsx
├── FlagOutline.tsx
├── Folder.tsx
├── FolderOutline.tsx
├── Globe.tsx
├── GlobeAlt.tsx
├── GlobeAltOutline.tsx
├── GlobeOutline.tsx
├── Hashtag.tsx
├── HashtagOutline.tsx
├── Heart.tsx
├── HeartOutline.tsx
├── Home.tsx
├── HomeOutline.tsx
├── Inbox.tsx
├── InboxIn.tsx
├── InboxInOutline.tsx
├── InboxOutline.tsx
├── InformationCircle.tsx
├── InformationCircleOutline.tsx
├── Key.tsx
├── KeyOutline.tsx
├── Library.tsx
├── LibraryOutline.tsx
├── LightBulb.tsx
├── LightBulbOutline.tsx
├── LightningBolt.tsx
├── LightningBoltOutline.tsx
├── Link.tsx
├── LinkOutline.tsx
├── LocationMarker.tsx
├── LocationMarkerOutline.tsx
├── LockClosed.tsx
├── LockClosedOutline.tsx
├── LockOpen.tsx
├── LockOpenOutline.tsx
├── Logout.tsx
├── LogoutOutline.tsx
├── Mail.tsx
├── MailOpen.tsx
├── MailOpenOutline.tsx
├── MailOutline.tsx
├── Menu.tsx
├── MenuAlt1.tsx
├── MenuAlt1Outline.tsx
├── MenuAlt2.tsx
├── MenuAlt2Outline.tsx
├── MenuAlt3.tsx
├── MenuAlt3Outline.tsx
├── MenuAlt4.tsx
├── MenuAlt4Outline.tsx
├── MenuOutline.tsx
├── Microphone.tsx
├── MicrophoneOutline.tsx
├── MinusCircle.tsx
├── MinusCircleOutline.tsx
├── Moon.tsx
├── MoonOutline.tsx
├── Newspaper.tsx
├── NewspaperOutline.tsx
├── OfficeBuilding.tsx
├── OfficeBuildingOutline.tsx
├── PaperClip.tsx
├── PaperClipOutline.tsx
├── Pause.tsx
├── PauseOutline.tsx
├── Pencil.tsx
├── PencilAlt.tsx
├── PencilAltOutline.tsx
├── PencilOutline.tsx
├── Phone.tsx
├── PhoneIncoming.tsx
├── PhoneIncomingOutline.tsx
├── PhoneOutgoing.tsx
├── PhoneOutgoingOutline.tsx
├── PhoneOutline.tsx
├── Photograph.tsx
├── PhotographOutline.tsx
├── Play.tsx
├── PlayOutline.tsx
├── Plus.tsx
├── PlusCircle.tsx
├── PlusCircleOutline.tsx
├── PlusOutline.tsx
├── Printer.tsx
├── PrinterOutline.tsx
├── Qrcode.tsx
├── QrcodeOutline.tsx
├── QuestionMarkCircle.tsx
├── QuestionMarkCircleOutline.tsx
├── ReceiptRefund.tsx
├── ReceiptRefundOutline.tsx
├── Refresh.tsx
├── RefreshOutline.tsx
├── Reply.tsx
├── ReplyOutline.tsx
├── Scale.tsx
├── ScaleOutline.tsx
├── Search.tsx
├── SearchOutline.tsx
├── Selector.tsx
├── SelectorOutline.tsx
├── Share.tsx
├── ShareOutline.tsx
├── ShieldCheck.tsx
├── ShieldCheckOutline.tsx
├── ShieldExclamation.tsx
├── ShieldExclamationOutline.tsx
├── ShoppingCart.tsx
├── ShoppingCartOutline.tsx
├── SortAscending.tsx
├── SortAscendingOutline.tsx
├── SortDescending.tsx
├── SortDescendingOutline.tsx
├── Sparkles.tsx
├── SparklesOutline.tsx
├── Speakerphone.tsx
├── SpeakerphoneOutline.tsx
├── Star.tsx
├── StarOutline.tsx
├── Stop.tsx
├── StopOutline.tsx
├── Sun.tsx
├── SunOutline.tsx
├── Support.tsx
├── SupportOutline.tsx
├── SwitchHorizontal.tsx
├── SwitchHorizontalOutline.tsx
├── SwitchVertical.tsx
├── SwitchVerticalOutline.tsx
├── Tag.tsx
├── TagOutline.tsx
├── Template.tsx
├── TemplateOutline.tsx
├── Terminal.tsx
├── TerminalOutline.tsx
├── Ticket.tsx
├── TicketOutline.tsx
├── Translate.tsx
├── TranslateOutline.tsx
├── Trash.tsx
├── TrashOutline.tsx
├── TrendingDown.tsx
├── TrendingDownOutline.tsx
├── TrendingUp.tsx
├── TrendingUpOutline.tsx
├── Upload.tsx
├── UploadOutline.tsx
├── User.tsx
├── UserAdd.tsx
├── UserAddOutline.tsx
├── UserCircle.tsx
├── UserCircleOutline.tsx
├── UserGroup.tsx
├── UserGroupOutline.tsx
├── UserOutline.tsx
├── UserRemove.tsx
├── UserRemoveOutline.tsx
├── Users.tsx
├── UsersOutline.tsx
├── ViewBoards.tsx
├── ViewBoardsOutline.tsx
├── ViewGridAdd.tsx
├── ViewGridAddOutline.tsx
├── ViewList.tsx
├── ViewListOutline.tsx
├── VolumeOff.tsx
├── VolumeOffOutline.tsx
├── VolumeUp.tsx
├── VolumeUpOutline.tsx
├── X.tsx
├── XCircle.tsx
├── XCircleOutline.tsx
├── XOutline.tsx
├── ZoomIn.tsx
├── ZoomInOutline.tsx
├── ZoomOut.tsx
└── ZoomOutOutline.tsx
```
