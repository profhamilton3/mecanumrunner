radio.onReceivedNumber(function (receivedNumber) {
    if (0 == receivedNumber) {
        wuKong.mecanumStop()
    } else if (1 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.Front, 100)
    } else if (2 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.left, 100)
    } else if (3 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.right, 100)
    } else if (4 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.rear, 100)
    } else if (5 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.LeftFront, 100)
    } else if (6 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.RightFront, 100)
    } else if (7 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.LeftRear, 100)
    } else if (8 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.RightRear, 100)
    } else if (9 == receivedNumber) {
        wuKong.mecanumRun(wuKong.RunList.stop, 0)
    } else if (10 == receivedNumber) {
        wuKong.mecanumDrift(wuKong.TurnList.Left)
    } else if (11 == receivedNumber) {
        wuKong.mecanumDrift(wuKong.TurnList.Right)
    } else if (12 == receivedNumber) {
        wuKong.mecanumSpin(wuKong.TurnList.Left, 100)
    } else if (13 == receivedNumber) {
        wuKong.mecanumSpin(wuKong.TurnList.Right, 100)
    } else {
        basic.showIcon(IconNames.No)
    }
})
radio.setGroup(1)
radio.setFrequencyBand(16)
wuKong.mecanumWheel(
wuKong.ServoList.S1,
wuKong.ServoList.S2,
wuKong.ServoList.S3,
wuKong.ServoList.S4
)
basic.showIcon(IconNames.Tortoise)
wuKong.setLightMode(wuKong.LightMode.BREATH)
