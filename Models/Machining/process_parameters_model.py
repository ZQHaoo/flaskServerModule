'''
author:AHAO
createTime:2024/06/03 08:45
description: 工艺参数模型
'''

from Models import db
import datetime
from Models.Login.user_model import User


class ProcessParameters(db.Model):

    __tablename__ = 'machining_process_parameters'

    id = db.Column(db.Text, primary_key=True, doc='工艺参数ID')
    name = db.Column(db.Text, unique=True, doc='工艺参数名称')
    label = db.Column(db.Text, unique=True, nullable=True, doc='工艺参数通用标识')
    mark = db.Column(db.Text, doc='备注')
    pic_address = db.Column(db.Text, nullable=True, doc='图片地址')

    # 关联创建者
    creator = db.relationship('User', backref='processParameters')
    creator_id = db.Column(db.Text, db.ForeignKey('user.id'))

    create_time = db.Column(db.DateTime, default = datetime.datetime.now, doc='创建时间')
    modify_time = db.Column(db.DateTime, onupdate = datetime.datetime.now, doc='修改时间')