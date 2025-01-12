import { useState } from 'react'

import { Button, Space } from 'antd'

import IonIcon from 'shared/antd/ionicon'
import ShareModal from './shareModal'

const AppShare = ({ appId }: { appId: string }) => {
  const [shareWith, setShareWith] = useState('')
  const [visible, setVisible] = useState(false)

  const onOpenModal = (type: string) => {
    setVisible(true)
    setShareWith(type)
  }

  return (
    <Space>
      <Button
        type="text"
        className="btn-icon"
        icon={<IonIcon name="logo-twitter" />}
        onClick={() => onOpenModal('twitter')}
      />
      <Button
        type="text"
        className="btn-icon"
        icon={<IonIcon name="logo-telegram" />}
        onClick={() => onOpenModal('telegram')}
      />
      <ShareModal
        appId={appId}
        shareWith={shareWith}
        visible={visible}
        onClose={() => setVisible(false)}
      />
    </Space>
  )
}

export default AppShare
